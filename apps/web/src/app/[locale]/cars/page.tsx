'use client';

import Booking from '@/components/Booking';
import Filters from '@/components/shared/Filters';
import ProductList from '@/components/ProductList';

export default function CarsListPage() {
  return (
    <main className="flex">
      <Filters />
      <div className="flex w-full flex-col gap-8 p-8">
        <Booking />
        <ProductList />
      </div>
    </main>
  );
}
