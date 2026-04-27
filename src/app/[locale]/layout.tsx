import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import { NextIntlClientProvider, useLocale } from 'next-intl';
import { LocaleProvider } from '@/context/LocaleContext';
import { ProductProvider } from '@/context/ProductContext';
import { WishlistProvider } from '@/context/WishlistContext';
import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';
import '@/styles/globals.css';

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
  const locale = useLocale();

  return (
    <html lang={locale} className={`${plusJakartaSans.variable} antialiased`}>
      <body>
        <NextIntlClientProvider>
          <LocaleProvider locale={locale}>
            <WishlistProvider>
              <ProductProvider>
                <Header />
                {children}
                <Footer />
              </ProductProvider>
            </WishlistProvider>
          </LocaleProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
