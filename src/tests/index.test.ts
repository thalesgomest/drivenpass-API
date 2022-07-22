import { authTest } from './auth.js';
import { credentialsTest } from './credentials.js';

describe('sequentially run test', () => {
	authTest();
	credentialsTest();
});
