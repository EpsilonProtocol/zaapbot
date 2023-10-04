import { json, urlencoded } from 'body-parser';
import cors from 'cors';
import express from 'express';
import { createServer as baseServer } from 'http';
import morgan from 'morgan';

export const createServer = () => {
	const app = express();

	const server = baseServer(app);

	app.disable('x-powered-by')
		.use(morgan('dev'))
		.use(urlencoded({ extended: true }))
		.use(json())
		.use(cors())
		.get('/health', (req, res) => {
			return res.json({ ok: true });
		});

	return { server, app };
};
