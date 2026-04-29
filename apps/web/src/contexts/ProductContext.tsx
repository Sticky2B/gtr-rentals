'use client';

import React, { createContext, useContext, useState, useEffect, useMemo, ReactNode, Suspense } from 'react';
import { Product } from '@/types/product';
import { useWishlist } from './WishlistContext';
import { useSearchParams } from 'next/navigation';
import { getStrapiURL } from '@/lib/strapi';

interface ProductContextType {
  products: Product[];
  filteredProducts: Product[];
  featuredProducts: Product[];
  recommendedProducts: Product[];
  wishlistProducts: Product[];
  loading: boolean;
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

function ProductProviderContent({ children }: { children: ReactNode }) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const { wishlist } = useWishlist();
  const searchParams = useSearchParams();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`${getStrapiURL('/api/cars?populate=*')}`);
        const json = await response.json();

        const flattenedData = json.data.map((item: any) => ({
          ...item,
          imgSrc: item.imgSrc.url ? `${getStrapiURL(item.imgSrc.url)}` : '/placeholder-car.png',
        }));

        setProducts(flattenedData);
      } catch (error) {
        console.error('Error fetching from Strapi:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const value = useMemo(() => {
    const featured = [...products].sort((a, b) => (b.price ?? 0) - (a.price ?? 0)).slice(0, 4);
    const recommended = [...products].sort(() => Math.random() - 0.5).slice(0, 8);
    const wishlistItems = products.filter((p) => wishlist.includes(String(p.productid)));

    const selectedTypes = (searchParams.get('type') ?? '').split(',').filter(Boolean);
    const selectedCapacities = (searchParams.get('capacity') ?? '').split(',').filter(Boolean);
    const maxPrice = Number(searchParams.get('maxPrice')) || Infinity;

    const filtered = products.filter((car) => {
      const typeMatch = selectedTypes.length === 0 || selectedTypes.includes(car.category);
      const capacityMatch = selectedCapacities.length === 0 || selectedCapacities.includes(String(car.seats));
      const priceMatch = car.price <= maxPrice;
      return typeMatch && capacityMatch && priceMatch;
    });

    return {
      products,
      featuredProducts: featured,
      recommendedProducts: recommended,
      wishlistProducts: wishlistItems,
      filteredProducts: filtered,
      loading,
    };
  }, [products, wishlist, searchParams, loading]);

  return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>;
}

export function ProductProvider({ children }: { children: ReactNode }) {
  return (
    <Suspense fallback={null}>
      <ProductProviderContent>{children}</ProductProviderContent>
    </Suspense>
  );
}

export function useProducts() {
  const context = useContext(ProductContext);
  if (context === undefined) {
    throw new Error('useProducts must be used within a ProductProvider');
  }
  return context;
}
