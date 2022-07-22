import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const main = async () => {
	const users = [
		{
			name: 'thales',
			email: 'thales@gmail.com',
			password: '123456',
		},
	];
	const credentials = [
		{
			title: 'Driven Hub',
			url: 'https://driven-hub.com',
			username: 'thalesxx',
			password: '123456',
			userId: 1,
		},
	];
	const notes = [
		{
			title: 'Notas do thales',
			content: 'segredos do thales',
			userId: 1,
		},
	];
	const cards = [
		{
			title: 'Nubank do thales',
			number: '1111 1111 1111 1111',
			cardholderName: 'THALES G GOMES',
			securityCode: '12/20',
			expirationDate: '1234',
			password: '123',
			isVirtual: false,
			type: 'debit' as const,
			userId: 1,
		},
	];
	const wifis = [
		{
			title: 'casa do thales',
			name: 'thalesWifi',
			password: '123345',
			userId: 1,
		},
	];

	await prisma.user.createMany({ data: users });
	await prisma.credential.createMany({ data: credentials });
	await prisma.note.createMany({ data: notes });
	await prisma.card.createMany({ data: cards });
	await prisma.wifi.createMany({ data: wifis });
};
main()
	.catch((e) => {
		console.error(e);
		process.exit(1);
	})
	.finally(async () => {
		await prisma.$disconnect();
	});
