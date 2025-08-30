'use client';

import './globals.css';
import { Inter, JetBrains_Mono } from 'next/font/google';
import { CartProvider } from '@/context/CartContext';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

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
    <html lang="en">
      <head>
        <title>YZY Store - Secondhand Clothing</title>
        <meta name="description" content="Premium secondhand clothing store" />
      </head>
      <body className={`${inter.className} ${jetbrainsMono.variable} font-mono bg-white text-black`}>
        <CartProvider>
          <Navbar />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}