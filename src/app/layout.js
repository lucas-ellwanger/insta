'use client';

import { SessionProvider } from 'next-auth/react';

import Header from './components/Header';
import './globals.css';

export const metadata = {
  title: 'Instagram',
  description:
    'Instagram clone using NextJS 13, TailwindCSS, Firebase and NextAuth.',
};

export default function RootLayout({ children, session }) {
  return (
    <html lang='en'>
      <body className='bg-gray-50 min-h-screen'>
        <SessionProvider session={session}>
          <Header />
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}
