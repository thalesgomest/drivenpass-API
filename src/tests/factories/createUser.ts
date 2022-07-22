import prisma from '../../config/database.js';
import app from '../../app.js';
import supertest from 'supertest';
import { faker } from '@faker-js/faker';
import { bcryptEncryptData } from '../../utils/bcrypt.js';

const name = faker.name.findName();
const password = faker.internet.password();
const firstName = name.split(' ')[0];

const userBody = {
	name,
	email: `${firstName}@gmail.com`,
	password,
};

const signInBody = {
	email: userBody.email,
	password: userBody.password,
};

const createUser = async () => {
	await prisma.user.create({
		data: { ...userBody, password: await bcryptEncryptData(password) },
	});

	const userCreated = await prisma.user.findUnique({
		where: { email: userBody.email },
	});

	const userLoggedIn = await supertest(app)
		.post('/auth/signin')
		.send(signInBody);
	const token = userLoggedIn.body.token;
	const userId = userCreated.id;
	return { token, userId };
};

export default createUser;
