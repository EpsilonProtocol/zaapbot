'use client';

import { useEffect, useState } from 'react';
import { Socket, io } from 'socket.io-client';

import ChatBoxComponent, { ChatMessage, SendMessageHandler } from 'ui/src/components/ChatBoxComponent';
import { CHAT_SOCKET_URL } from '../../../config/env';

export default function ChatBox() {
	const [socket, setSocket] = useState<Socket | undefined>();

	const [messages, setMessages] = useState<ChatMessage[]>([]);

	const handleSendMessage: SendMessageHandler = (data) => {
		if (!socket) return;

		const message: ChatMessage = {
			isUserMessage: true,
			text: data.message,
		};

		setMessages((messages) => [...messages, message]);

		socket.emit('chat:message', message);
	};

	useEffect(() => {
		if (!socket) return;

		socket.on('connect', () => {
			console.log('Connection');
		});

		socket.on('chat:message', (newMessage: ChatMessage) => {
			setMessages((messages) => [...messages, newMessage]);
		});
	}, [socket]);

	useEffect(() => {
		setSocket(io(CHAT_SOCKET_URL));
	}, []);

	return <ChatBoxComponent handleSendMessage={handleSendMessage} messages={messages} />;
}
