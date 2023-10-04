import ChatBox from '../components/ui/ChatBox';

import '../styles/index.scss';

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en'>
			<body className={'dark'}>
				{children}
				<ChatBox />
			</body>
		</html>
	);
}
