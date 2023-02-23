import '@/styles/globals.css';
import { ReactNode } from 'react';
import { Inter } from '@next/font/google';

import logoSvg from '@/assets/logo.svg';
import Image from 'next/image';

const inter = Inter({ subsets: ['latin'], weight: '400' });

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body className={inter.className}>
        <div className="flex flex-col items-start justify-center min-h-screen">
          <header className="py-8 w-full max-w-6xl my-0 mx-auto">
            <Image src={logoSvg} alt="Logo" />
          </header>
          {children}
        </div>
      </body>
    </html>
  );
}
