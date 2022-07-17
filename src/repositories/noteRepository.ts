import { NoteData } from '../interfaces/notesInterface.js';
import prisma from '../config/database.js';

export const getByTitle = async (title: string, userId: number) => {
	return prisma.note.findFirst({
		where: {
			title: {
				equals: title,
				mode: 'insensitive',
			},
			userId,
		},
	});
};

export const create = async (NoteData: NoteData) => {
	return prisma.note.create({
		data: NoteData,
	});
};
