import * as credentialRepository from '../repositories/credentialRepository.js';
import * as userRepository from '../repositories/userRepository.js';
import { CredentialData } from '../interfaces/credentialsInterface.js';
import { cryptrEncryptData } from '../utils/cryptr.js';

import AppError from '../config/error.js';

export const userIdExist = async (userId: number) => {
	const user = await userRepository.getUserById(userId);
	if (!user) {
		throw new AppError(
			'User not found',
			404,
			'User not found',
			'Ensure that the user exists'
		);
	}
};

export const credentialTitleExist = async (title: string, userId: number) => {
	const credential = await credentialRepository.getByTitle(title, userId);
	if (credential) {
		throw new AppError(
			'Credential title already exist',
			409,
			'Credential title already exist',
			'Ensure that the credential title is unique'
		);
	}
};

export const createCredential = async (CredentialData: CredentialData) => {
	const { password } = CredentialData;
	const encryptedPassword = cryptrEncryptData(password);
	await credentialRepository.create({
		...CredentialData,
		password: encryptedPassword,
	});
};

export const getAllCredentials = async (userId: number) => {
	const credentials = await credentialRepository.getAll(userId);
	if (!credentials) {
		throw new AppError(
			'No credentials found',
			404,
			'No credentials found',
			'Ensure that the user has credentials'
		);
	}
	return credentials;
};
