import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import { WishlistProvider } from '@/context/WishlistContext';
import './globals.css';

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: '--font-plus-jakarta-sans',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'GTR Rentals',
  description: 'Renting the best cars in the world',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} antialiased`}>
      <body>
        <Header />
        <WishlistProvider>{children}</WishlistProvider>
        <Footer />
      </body>
    </html>
  );
}
