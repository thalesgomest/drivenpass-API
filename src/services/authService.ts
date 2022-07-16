import { UserData, SignInData } from '../interfaces/authInterface.js';
import { encryptData, compareEncryptedData } from '../utils/cryptography.js';
import { generateToken } from '../utils/JWT.js';
import * as userRepository from '../repositories/userRepository.js';
import AppError from '../config/error.js';

export const signUp = async (UserData: UserData) => {
	const { name, email, password } = UserData;
	const user = await userRepository.getByEmail(email);
	if (user) {
		throw new AppError(
			'user already registered with this email',
			400,
			'user already registered with this email',
			'Ensure that the email is unique'
		);
	}
	const encryptedPassword = await encryptData(password);
	await userRepository.insert({ name, email, password: encryptedPassword });
};

export const signIn = async (signInData: SignInData) => {
	const { email, password } = signInData;
	const user = await userRepository.getByEmail(email);
	if (!user) {
		throw new AppError(
			'Invalid email or password',
			404,
			'Invalid email or password',
			'Ensure that the data is correct'
		);
	}
	const passwordIsValid = compareEncryptedData(password, user.password);
	if (!passwordIsValid) {
		throw new AppError(
			'Invalid email or password',
			404,
			'Invalid email or password',
			'Ensure that the data is correct'
		);
	}
	const { id, name } = user;
	return { token: generateToken(id, name) };
};
