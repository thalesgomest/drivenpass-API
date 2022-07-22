import prisma from '../../config/database.js';
import { faker } from '@faker-js/faker';
import { cryptrEncryptData } from '../../utils/cryptr.js';

import createUser from './createUser';

const credentialBody = {
	url: faker.internet.url(),
	username: faker.internet.userName(),
	title: faker.lorem.sentence(),
	password: faker.internet.password(),
};

const createCredential = async () => {
	const { token, userId } = await createUser();

	await prisma.credential.create({
		data: {
			...credentialBody,
			userId,
			password: cryptrEncryptData(credentialBody.password),
		},
	});
	const credentialCreated = await prisma.credential.findFirst({
		where: { title: credentialBody.title, userId },
	});
	const credentialId = credentialCreated.id;
	return { credentialId, token, userId };
};

export default createCredential;
