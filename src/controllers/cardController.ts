import { Request, Response } from 'express';
import { CardData, CardBodyData } from '../interfaces/cardsInterface.js';
import * as cardService from '../services/cardService.js';

export const createCard = async (req: Request, res: Response) => {
	const userId = Number(req.params.userId);
	const cardBodyData: CardBodyData = req.body;
	const cardData: CardData = { ...cardBodyData, userId };
	const { title } = cardData;
	await cardService.userIdExist(userId);
	await cardService.cardTitleExist(title, userId);
	await cardService.createCard(cardData);
	res.status(201).json({ message: 'card created' });
};
