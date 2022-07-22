import prisma from '../config/database.js';
import app from '../app.js';
import supertest from 'supertest';
import { faker } from '@faker-js/faker';

export const authTest = () => {
	beforeEach(async () => {
		await prisma.$executeRaw`TRUNCATE "users" CASCADE;`;
	});

	describe('POST auth/signup', () => {
		const name = faker.name.findName();
		const password = faker.internet.password();
		const firstName = name.split(' ')[0];
		const body = {
			name,
			email: `${firstName}@gmail.com`,
			password,
			confirmPassword: password,
		};
		it('returns 201 for valid params. User created', async () => {
			const result = await supertest(app).post('/auth/signup').send(body);
			const status = result.status;

			const userCreated = await prisma.user.findUnique({
				where: { email: body.email },
			});
			expect(status).toEqual(201);
			expect(userCreated).not.toBeNull();
		});

		it('returns 409 for valid params. User already created', async () => {
			await supertest(app).post('/auth/signup').send(body);

			const userAlreadyCreated = await supertest(app)
				.post('/auth/signup')
				.send(body);
			const status = userAlreadyCreated.status;

			expect(status).toEqual(409);
		});

		it('returns 422 for valid params. Email is too short', async () => {
			const name = faker.name.findName();
			const password = faker.internet.password(3);
			const body = {
				name,
				email: `${name}@gmail.com`,
				password,
				confirmPassword: password,
			};

			const emailTooShort = await supertest(app)
				.post('/auth/signup')
				.send(body);
			const status = emailTooShort.status;

			expect(status).toEqual(422);
		});
	});

	describe('POST auth/signin', () => {
		const name = faker.name.findName();
		const password = faker.internet.password();
		const firstName = name.split(' ')[0];
		it('returns 200 for valid params. User logged in', async () => {
			const body = {
				email: `${firstName}@gmail.com`,
				password,
			};
			await supertest(app)
				.post('/auth/signup')
				.send({
					name,
					email: `${firstName}@gmail.com`,
					password,
					confirmPassword: password,
				});

			const userLoggedIn = await supertest(app)
				.post('/auth/signin')
				.send(body);
			const status = userLoggedIn.status;
			expect(status).toEqual(200);
		});

		it('returns 404 for invalid params. Invalid email', async () => {
			const body = {
				email: `${firstName}@gmail.com`,
				password: faker.internet.password(),
			};
			const userLoggedIn = await supertest(app)
				.post('/auth/signin')
				.send(body);
			const status = userLoggedIn.status;
			expect(status).toEqual(404);
		});
	});

	afterAll(async () => {
		await prisma.$disconnect();
	});
};
