import { Socket } from 'socket.io';
import { handleSendMessage } from '../../../utils/socketio';

type Message = {
	text: string;
	isUserMessage: boolean;
};

export const chatConnectionHandler = (socket: Socket) => {
	try {
		handleSendMessage(socket, 'Welcome Mr. Patron');
	} catch (err) {
		console.log(`Err - ${err}`);
	}
};

export const userMessageHandler = (socket: Socket, message: Message) => {
	try {
		console.log(`Handle message - ${message.text}`);
	} catch (err) {
		console.log(`Err - ${err}`);
	}
};
