import prisma from '../config/database.js';
import app from '../app.js';
import supertest from 'supertest';
import { faker } from '@faker-js/faker';
import createUser from './factories/createUser.js';
import createCredential from './factories/createCredential.js';

export const credentialsTest = () => {
	beforeEach(async () => {
		await prisma.$executeRaw`TRUNCATE "credentials" CASCADE;`;
	});

	describe('POST credentials/:userId/create', () => {
		const credentialBody = {
			url: faker.internet.url(),
			username: faker.internet.userName(),
			title: faker.lorem.sentence(),
			password: faker.internet.password(),
		};

		it('returns 201 for valid params. Credential created', async () => {
			const { token, userId } = await createUser();
			const credential = await supertest(app)
				.post(`/credentials/${userId}/create`)
				.set('Authorization', `Bearer ${token}`)
				.send(credentialBody);
			const status = credential.status;
			const credentialCreated = await prisma.credential.findFirst({
				where: { url: credentialBody.url },
			});
			expect(status).toEqual(201);
			expect(credentialCreated).not.toBeNull();
		});
	});

	describe('GET credentials/:userId', () => {
		it('returns 200 for valid paramns. Get all credentials', async () => {
			const { token, userId } = await createUser();
			const credentialsByUserId = await supertest(app)
				.get(`/credentials/${userId}`)
				.set('Authorization', `Bearer ${token}`);
			const status = credentialsByUserId.status;
			expect(status).toEqual(200);
		});
	});

	describe('GET credentials/:userId/:credentialId', () => {
		it('returns 200 for valid paramns. Get credentials by credentialId', async () => {
			const { credentialId, token, userId } = await createCredential();
			const credentialsByUserId = await supertest(app)
				.get(`/credentials/${userId}/${credentialId}`)
				.set('Authorization', `Bearer ${token}`);
			const status = credentialsByUserId.status;
			expect(status).toEqual(200);
		});
	});

	describe('DELETE credentials/:userId/:credentialId', () => {
		it('returns 200 for valid paramns. Delete credentials by credentialId', async () => {
			const { credentialId, token, userId } = await createCredential();
			const credentialsByUserId = await supertest(app)
				.delete(`/credentials/${userId}/${credentialId}`)
				.set('Authorization', `Bearer ${token}`);
			const status = credentialsByUserId.status;
			expect(status).toEqual(200);
		});
	});

	afterAll(async () => {
		await prisma.$disconnect();
	});
};
