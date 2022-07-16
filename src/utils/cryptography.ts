import bcrypt from 'bcrypt';

const encryptData = (data: string) => {
	return bcrypt.hash(data, 10);
};

const compareEncryptedData = (data: string, encryptedData: string) => {
	return bcrypt.compareSync(data, encryptedData);
};

export { encryptData, compareEncryptedData };
