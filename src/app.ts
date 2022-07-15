import express, { json } from 'express';
import 'express-async-errors';
import cors from 'cors';
import chalk from 'chalk';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
app.use(cors());
app.use(json());

app.get('/', (req, res) => {
	res.json({ message: 'Hello World' });
});

const port = +process.env.PORT || 5000;
app.listen(port, () => {
	console.log(chalk.bold.green(`Server is running on port ${port} 🧑‍💻`));
});
