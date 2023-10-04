import { motion } from 'framer-motion';
import { useCallback, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import TextInput from '../inputs/TextInput';
import './ChatBox.scss';

type Inputs = {
	message: string;
};

export type ChatMessage = {
	text: string;
	isUserMessage: boolean;
};

export type SendMessageHandler = SubmitHandler<Inputs>;

type Props = {
	messages: ChatMessage[];
	handleSendMessage: SendMessageHandler;
};

export default function ChatBoxComponent({ messages, handleSendMessage }: Props) {
	const [isChatBoxOpen, setIsChatBoxOpen] = useState(true);

	const { register, handleSubmit, reset } = useForm<Inputs>();

	const toggleChat = useCallback(() => setIsChatBoxOpen((i) => !i), []);

	const onSubmit: SubmitHandler<Inputs> = (data) => {
		handleSendMessage(data);

		reset();
	};

	return (
		<div className='chatbox'>
			<button className='chatbox__toggle' onClick={toggleChat}>
				Zaapbot Chat
			</button>
			<motion.div className='chatbox__chat-container' initial={{ height: 0 }} animate={{ height: isChatBoxOpen ? 500 : 0 }} exit={{ height: 0 }}>
				<div className='chatbox__messages-container'>
					{messages.map((message, ind) => (
						<div key={ind} className={`chatbox__chat-message ${message.isUserMessage ? 'chatbox__user-message' : 'chatbox__bot-message'}`}>
							{message.text}
						</div>
					))}
				</div>
				<form onSubmit={handleSubmit(onSubmit)}>
					<TextInput containerClass='chatbox__chat-input' inputProps={{ ...register('message', { minLength: 3 }), autoComplete: 'off', placeholder: 'Enter query here...' }} />
				</form>
			</motion.div>
		</div>
	);
}
