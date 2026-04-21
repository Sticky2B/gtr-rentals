'use client';

import { useEffect, useState } from 'react';
import { useWishlist } from '@/context/WishlistContext';
import products from '@/data/products.json';
import ProductList from '@/app/components/ProductList';

export default function WishlistPage() {
  const { wishlist } = useWishlist();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const favoriteCars = products.filter((car) => wishlist.includes(car.productid));

  return (
    <main className="flex w-full flex-col gap-8 p-8">
      <h1 className="text-secondary-500 text-4xl font-bold">Your Wishlist</h1>
      {favoriteCars.length === 0 ? (
        <div className="rounded-lg border-2 border-dashed p-12 text-center opacity-60">
          <p>You haven't added any favorites yet!</p>
        </div>
      ) : (
        <ProductList products={favoriteCars} isWishlist={true} />
      )}
    </main>
  );
}
