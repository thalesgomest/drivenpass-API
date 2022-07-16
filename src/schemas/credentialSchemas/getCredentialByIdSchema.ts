import Joi from 'joi';

const createCredentialParamsSchema = Joi.object({
	userId: Joi.number().positive().required(),
	credentialId: Joi.number().positive().required(),
});

const getAllCredentialsSchema = Joi.object({
	params: createCredentialParamsSchema,
}).options({ allowUnknown: true });

export default getAllCredentialsSchema;
