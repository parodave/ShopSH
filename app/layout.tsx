'use client';

import './globals.css';
import { Inter, JetBrains_Mono } from 'next/font/google';
import { CartProvider } from '@/context/CartContext';
import PageFooter from '@/components/PageFooter';
import HeaderBar from '@/components/HeaderBar';
import ElevenLabsWidget from '@/components/ElevenLabsWidget';

const inter = Inter({ subsets: ['latin'] });
const jetbrainsMono = JetBrains_Mono({ 
  subsets: ['latin'],
  variable: '--font-mono' 
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <title>YZY Store - Secondhand Clothing</title>
        <meta name="description" content="Premium secondhand clothing store" />
      </head>
      <body className={`${inter.className} ${jetbrainsMono.variable} font-mono bg-white text-black min-h-screen flex flex-col pt-14`}>
        <CartProvider>
          <HeaderBar />
          <main className="flex-1 sh-content">
            {children}
          </main>
          {/* Footer unique en bas du flux, non fixe */}
          <PageFooter />
        </CartProvider>
        <ElevenLabsWidget />
      </body>
    </html>
  );
}
