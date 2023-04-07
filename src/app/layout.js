'use client';

import { SessionProvider } from 'next-auth/react';
import { RecoilRoot } from 'recoil';

import Header from './components/Header';
import './globals.css';

// export const metadata = {
//   title: 'Instagram',
//   description:
//     'Instagram clone using NextJS 13, TailwindCSS, Firebase and NextAuth.',
// };

export default function RootLayout({ children, session }) {
  return (
    <html lang='en'>
      <body className='bg-gray-50 min-h-screen select-none'>
        <SessionProvider session={session}>
          <RecoilRoot>
            <Header />
            {children}
          </RecoilRoot>
        </SessionProvider>
      </body>
    </html>
  );
}
