'use client';

import { use } from 'react';
import { useProducts } from '@/contexts/ProductContext';
import { notFound } from 'next/navigation';

export default function CarDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { products, loading } = useProducts();
  const { id } = use(params);

  if (loading) {
    return (
      <div className="p-8">
        <div className="h-96 w-full animate-pulse rounded-xl bg-slate-200" />
      </div>
    );
  }

  const car = products.find((p) => String(p.productid) === id);

  if (!car) {
    notFound();
  }

  return (
    <main className="flex flex-col gap-8 p-8">
      <div className="flex flex-col gap-10 md:flex-row">
        <div className="flex-1 rounded-xl bg-white p-4 shadow-sm">
          <img src={car.imgSrc} alt={car.title} className="w-full rounded-lg" />
        </div>

        <div className="flex-1">
          <h1 className="text-secondary-500 text-4xl font-bold">{car.title}</h1>
          <p className="text-secondary-300 mt-2">{car.category}</p>
          <div className="mt-8">
            <span className="text-2xl font-bold">${car.price ?? 0}/day</span>
          </div>
          <button className="mt-6 rounded-lg bg-blue-600 px-8 py-3 font-semibold text-white">Rent Now</button>
        </div>
      </div>
    </main>
  );
}
