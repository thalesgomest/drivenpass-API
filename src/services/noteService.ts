import * as noteRepository from '../repositories/noteRepository.js';
import * as userRepository from '../repositories/userRepository.js';
import { NoteData } from '../interfaces/notesInterface.js';

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

export const noteTitleExist = async (title: string, userId: number) => {
	const note = await noteRepository.getByTitle(title, userId);
	if (note) {
		throw new AppError(
			'Note title already exist',
			409,
			'Note title already exist',
			'Ensure that the note title is unique'
		);
	}
};

export const createNote = async (NoteData: NoteData) => {
	await noteRepository.create(NoteData);
};
