'use client';

import { useEffect, useMemo, useState } from 'react';
import { useProducts } from '@/context/ProductContext';
import { useWishlist } from '@/context/WishlistContext';
import ProductList from '@/components/ProductList';

export default function WishlistPage() {
  const { products, loading: productsLoading } = useProducts();
  const { wishlist } = useWishlist();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || productsLoading) {
    return (
      <main className="flex w-full flex-col gap-8 p-8">
        <h1 className="text-secondary-500 text-4xl font-bold">Loading your favorite cars...</h1>
      </main>
    );
  }

  const favoriteCars = useMemo(() => {
    const wishlistStrings = wishlist.map(String);
    return products.filter((car) => wishlistStrings.includes(String(car.productid)));
  }, [products, wishlist]);

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
