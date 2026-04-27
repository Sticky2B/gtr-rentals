'use client';

import { useProducts } from '@/context/ProductContext';
// import { useTranslations } from 'next-intl';
import HeroBanner from '@/components/HeroBanner';
import Booking from '@/components/Booking';
import ProductList from '@/components/ProductList';

export default function Home() {
  // const t = useTranslations('Homepage');
  const { products } = useProducts();

  return (
    <main className="flex flex-col gap-8 p-8">
      {/*<h1>{t('title')}</h1>*/}
      <HeroBanner />
      <Booking />
      <ProductList isFeatured={true} />
      <ProductList isRecommended={true} className="pb-8" />
    </main>
  );
}
