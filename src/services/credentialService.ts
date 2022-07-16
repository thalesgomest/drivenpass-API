import * as credentialRepository from '../repositories/credentialRepository.js';
import { CredentialData } from '../interfaces/credentialsInterface.js';
import { cryptrEncryptData } from '../utils/cryptr.js';

import AppError from '../config/error.js';

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
