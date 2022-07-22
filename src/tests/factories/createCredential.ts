import prisma from '../../config/database.js';
import app from '../../app.js';
import supertest from 'supertest';
import { faker } from '@faker-js/faker';

import createUser from './createUser';

const credentialBody = {
	url: faker.internet.url(),
	username: faker.internet.userName(),
	title: faker.lorem.sentence(),
	password: faker.internet.password(),
};

const createCredential = async () => {
	const { token, userId } = await createUser();
	await supertest(app)
		.post(`/credentials/${userId}/create`)
		.set('Authorization', `Bearer ${token}`)
		.send(credentialBody);
	const credentialCreated = await prisma.credential.findFirst({
		where: { title: credentialBody.title, userId },
	});
	const credentialId = credentialCreated.id;
	return { credentialId, token, userId };
};

export default createCredential;
