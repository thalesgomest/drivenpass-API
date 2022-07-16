import { UserData, SignInData } from '../interfaces/authInterface.js';
import { Request, Response } from 'express';
import * as authService from '../services/authService.js';

export const signUp = async (req: Request, res: Response) => {
	const userData: UserData = req.body;
	await authService.signUp(userData);
	res.status(201).json({ message: 'user created' });
};

export const signIn = async (req: Request, res: Response) => {
	const signInData: SignInData = req.body;
	const token = await authService.signIn(signInData);
	res.status(200).json(token);
};
