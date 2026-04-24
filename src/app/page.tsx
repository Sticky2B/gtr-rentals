'use client';

import { useProducts } from '@/context/ProductContext';
import HeroBanner from '@/components/HeroBanner';
import Booking from '@/components/Booking';
import ProductList from '@/components/ProductList';

export default function Home() {
  const { products } = useProducts();

  return (
    <main className="flex flex-col gap-8 p-8">
      <HeroBanner />
      <Booking />
      <ProductList products={products} isFeatured={true} />
      <ProductList products={products} isRecommended={true} className="pb-8" />
    </main>
  );
}
