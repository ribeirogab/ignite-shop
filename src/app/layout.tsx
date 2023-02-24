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
        <div className="flex min-h-screen flex-col items-start justify-center">
          <header className="my-0 mx-auto w-full max-w-container py-8">
            <Image src={logoSvg} alt="Logo" />
          </header>
          {children}
        </div>
      </body>
    </html>
  );
}
