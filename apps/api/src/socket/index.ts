import { Server } from 'http';
import { Server as SocketServer } from 'socket.io';
import { chatHandlers } from './handlers';

export const initSockets = (server: Server) => {
	const io = new SocketServer(server, {
		cors: {
			origin: '*',
		},
	});

	io.of('/chat').on('connection', chatHandlers.chatConnectionHandler);
	io.of('/chat').on('chat:message', chatHandlers.userMessageHandler);
};
