import * as wifiRepository from '../repositories/wifiRepository.js';
import * as userRepository from '../repositories/userRepository.js';
import { WifiData } from '../interfaces/wifisInterface.js';

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

export const createWifi = async (wifiData: WifiData) => {
	await wifiRepository.create(wifiData);
};
