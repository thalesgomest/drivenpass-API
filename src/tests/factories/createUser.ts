import prisma from '../../config/database.js';
import app from '../../app.js';
import supertest from 'supertest';
import { faker } from '@faker-js/faker';

const name = faker.name.findName();
const password = faker.internet.password();
const firstName = name.split(' ')[0];

const userBody = {
	name,
	email: `${firstName}@gmail.com`,
	password,
	confirmPassword: password,
};

const signInBody = {
	email: userBody.email,
	password: userBody.password,
};

const createUser = async () => {
	await supertest(app).post('/auth/signup').send(userBody);

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
