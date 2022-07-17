import { Router } from 'express';
import validadeSchemaMiddleware from '../middlewares/validateSchemaMiddleware.js';
import validateBearerTokenMiddleware from '../middlewares/validateBearerTokenMiddleware.js';
import createCardSchema from '../schemas/cardSchemas/createCardSchema.js';

import * as noteController from '../controllers/cardController.js';

const cardsRouter = Router();

cardsRouter.use(validateBearerTokenMiddleware);
cardsRouter.post(
	'/:userId/create',
	validadeSchemaMiddleware(createCardSchema),
	noteController.createCard
);
/* 
cardRouter.get(
	'/:userId',
	validadeSchemaMiddleware(getAllcardSchema),
	noteController.getAllcard
);
cardRouter.get(
	'/:userId/:noteId',
	validadeSchemaMiddleware(getNoteByIdSchema),
	noteController.getcardById
);

cardRouter.delete(
	'/:userId/:noteId',
	validadeSchemaMiddleware(deletecardchema),
	noteController.deleteNote
);
 */
export default cardsRouter;
