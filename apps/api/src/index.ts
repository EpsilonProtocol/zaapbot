import { mainRouter } from './routes';
import { createServer } from './server';
import { initSockets } from './socket';

const port = process.env.PORT || 8080;
const { server, app } = createServer();

app.use(mainRouter);

initSockets(server);

server.listen(port, () => {
	console.log(`api running on ${port}`);
});
