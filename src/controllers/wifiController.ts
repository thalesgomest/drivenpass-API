import { Request, Response } from 'express';
import { WifiData, WifiBodyData } from '../interfaces/wifisInterface.js';
import * as wifiService from '../services/wifiService.js';

export const createWifi = async (req: Request, res: Response) => {
	const userId = Number(req.params.userId);
	const wifiBodyData: WifiBodyData = req.body;
	const wifiData: WifiData = { ...wifiBodyData, userId };
	await wifiService.userIdExist(userId);
	await wifiService.createWifi(wifiData);
	res.status(201).json({ message: 'wifi created' });
};
