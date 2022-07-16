import { Router } from 'express';
import validadeSchemaMiddleware from '../middlewares/validateSchemaMiddleware.js';
import validateBearerTokenMiddleware from '../middlewares/validateBearerTokenMiddleware.js';
import createCredentialSchema from '../schemas/credentialSchemas/createCredentialSchema.js';
import * as credentialController from '../controllers/credentialController.js';

const credentialsRouter = Router();

credentialsRouter.use(validateBearerTokenMiddleware);
credentialsRouter.post(
	'/:userId/create',
	validadeSchemaMiddleware(createCredentialSchema),
	credentialController.createCredential
);
credentialsRouter.get('/');
credentialsRouter.get('/:credentialId');
credentialsRouter.delete('/:credentialId');

export default credentialsRouter;
