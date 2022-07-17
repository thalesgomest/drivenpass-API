import { CardData } from '../interfaces/cardsInterface.js';
import prisma from '../config/database.js';

export const getByTitle = async (title: string, userId: number) => {
	return await prisma.card.findFirst({
		where: {
			title: {
				equals: title,
				mode: 'insensitive',
			},
			userId,
		},
	});
};

export const create = async (cardData: CardData) => {
	await prisma.card.create({
		data: cardData,
	});
};
