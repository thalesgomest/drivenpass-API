import { Request, Response } from 'express';
import {
	CredentialData,
	CredentialBodyData,
} from '../interfaces/credentialsInterface.js';
import * as credentialService from '../services/credentialService.js';

export const createCredential = async (req: Request, res: Response) => {
	const userId = Number(req.params.userId);
	const CredentialBodyData: CredentialBodyData = req.body;
	const CredentialData: CredentialData = { ...CredentialBodyData, userId };
	const { title } = CredentialData;
	await credentialService.userIdExist(userId);
	await credentialService.credentialTitleExist(title, userId);
	await credentialService.createCredential(CredentialData);
	res.status(201).json({ message: 'credential created' });
};

export const getAllCredentials = async (req: Request, res: Response) => {
	const userId = Number(req.params.userId);
	await credentialService.userIdExist(userId);
	const credentials = await credentialService.getAllCredentials(userId);
	res.status(200).json({ credentials });
};

export const getCredentialById = async (req: Request, res: Response) => {
	const userId = Number(req.params.userId);
	const credentialId = Number(req.params.credentialId);
	await credentialService.userIdExist(userId);
	const credential = await credentialService.getCredentialById(
		userId,
		credentialId
	);
	res.status(200).json({ credential });
};

export const deleteCredential = async (req: Request, res: Response) => {
	const userId = Number(req.params.userId);
	const credentialId = Number(req.params.credentialId);
	await credentialService.getCredentialById(userId, credentialId);
	await credentialService.deleteCredential(credentialId);
	res.status(200).json({ message: 'credential deleted' });
};
