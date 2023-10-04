import { Socket } from 'socket.io';

export const handleSendMessage = (io: Socket, message: string) => {
	io.emit('chat:message', { text: message, isUserMessage: false });
};
