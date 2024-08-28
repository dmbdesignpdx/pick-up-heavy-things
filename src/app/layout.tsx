import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import { Noto_Sans } from 'next/font/google';

import '../styles/globals.css';


const noto = Noto_Sans({
	subsets: ['latin'],
	display: 'swap',
});


export const metadata: Metadata = {
	title: 'Pick Up Heavy Things',
	description: 'An app to calculate weight amounts.',
};


export default function RootLayout({
	children,
}: Readonly<{
	children: ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={noto.className}>{children}</body>
		</html>
	);
}
