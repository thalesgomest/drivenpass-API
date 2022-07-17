import * as cardRepository from '../repositories/cardRepository.js';
import * as userRepository from '../repositories/userRepository.js';
import { CardData } from '../interfaces/cardsInterface.js';
import { cryptrEncryptData, cryptrDecryptData } from '../utils/cryptr.js';

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

export const cardTitleExist = async (title: string, userId: number) => {
	const card = await cardRepository.getByTitle(title, userId);
	if (card) {
		throw new AppError(
			'card title already exist',
			409,
			'card title already exist',
			'Ensure that the card title is unique'
		);
	}
};

export const createCard = async (cardData: CardData) => {
	const { password } = cardData;
	const encryptedPassword = cryptrEncryptData(password);
	await cardRepository.create({
		...cardData,
		password: encryptedPassword,
	});
};
