import app from './app.js';
import chalk from 'chalk';

const port = +process.env.PORT || 5000;

app.listen(port, () => {
	console.log(chalk.bold.green(`Server is running on port ${port} 🧑‍💻`));
});
