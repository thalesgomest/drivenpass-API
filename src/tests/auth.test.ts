import prisma from '../config/database.js';
import app from '../app.js';
import supertest from 'supertest';

beforeEach(async () => {
	// await prisma.$executeRaw`TRUNCATE TABLE users;`;
});

describe('POST auth/signup', () => {
	it('returns 201 for valid params', async () => {
		const body = {
			name: 'teste',
			email: '123@gmail.com',
			password: 'testando12',
			confirmPassword: 'testando12',
		};

		const result = await supertest(app).post('/auth/signup').send(body);
		const status = result.status;

		const userCreated = await prisma.user.findUnique({
			where: { email: body.email },
		});
		expect(status).toEqual(201);
		expect(userCreated).not.toBeNull();
	});
});

afterAll(async () => {
	await prisma.$disconnect();
});
