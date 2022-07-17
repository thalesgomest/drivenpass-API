import { Request, Response } from 'express';
import { NoteData, NoteBodyData } from '../interfaces/notesInterface.js';
import * as noteService from '../services/noteService.js';

export const createNote = async (req: Request, res: Response) => {
	const userId = Number(req.params.userId);
	const NoteBodyData: NoteBodyData = req.body;
	const NoteData: NoteData = { ...NoteBodyData, userId };
	const { title } = NoteData;
	await noteService.userIdExist(userId);
	await noteService.noteTitleExist(title, userId);
	await noteService.createNote(NoteData);
	res.status(201).json({ message: 'Note created' });
};
