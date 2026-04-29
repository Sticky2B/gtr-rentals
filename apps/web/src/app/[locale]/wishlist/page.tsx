'use client';

import ProductList from '@/components/ProductList';

export default function WishlistPage() {
  return (
    <main className="flex w-full flex-col gap-8 p-8">
      <ProductList isWishlist={true} />
    </main>
  );
}
