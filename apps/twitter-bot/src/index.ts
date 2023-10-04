import { establishConnection } from 'core';
import { Bot } from './services/bot';

const main = async () => {
	await establishConnection();

	const bot = new Bot();

	await bot.update();
};

main().catch((err: Error) => console.error(err));
