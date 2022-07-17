import { Router } from 'express';
import validadeSchemaMiddleware from '../middlewares/validateSchemaMiddleware.js';
import validateBearerTokenMiddleware from '../middlewares/validateBearerTokenMiddleware.js';
import createNoteSchema from '../schemas/noteSchemas/createNoteSchema.js';
import * as noteController from '../controllers/noteController.js';

const noutesRouter = Router();

noutesRouter.use(validateBearerTokenMiddleware);
noutesRouter.post(
	'/:userId/create',
	validadeSchemaMiddleware(createNoteSchema),
	noteController.createNote
);

export default noutesRouter;
