import { CredentialData } from '../interfaces/credentialsInterface.js';
import prisma from '../config/database.js';

export const getByTitle = async (title: string, userId: number) => {
	return prisma.credential.findFirst({
		where: {
			title,
			userId,
		},
	});
};

export const create = async (CredentialData: CredentialData) => {
	return prisma.credential.create({
		data: CredentialData,
	});
};
