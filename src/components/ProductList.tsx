'use client';

import { Link } from '@/i18n/navigation';
import ProductCard from '@/components/ProductCard';
import { useProducts } from '@/context/ProductContext';

interface ProductListProps {
  isFeatured?: boolean;
  isRecommended?: boolean;
  isWishlist?: boolean;
  className?: string;
}

const ProductList = ({
  isFeatured = false,
  isRecommended = false,
  isWishlist = false,
  className = '',
}: ProductListProps) => {
  const { filteredProducts, featuredProducts, recommendedProducts, wishlistProducts, loading } = useProducts();

  const CONFIG = {
    featured: { title: 'Most Popular', showLink: true },
    recommended: { title: 'Recommended cars', showLink: false },
    wishlist: { title: 'Your Wishlist', showLink: false },
  };

  const settings = isFeatured
    ? CONFIG.featured
    : isRecommended
      ? CONFIG.recommended
      : isWishlist
        ? CONFIG.wishlist
        : null;

  const renderProducts = isFeatured
    ? featuredProducts
    : isRecommended
      ? recommendedProducts
      : isWishlist
        ? wishlistProducts
        : filteredProducts;

  if (loading) {
    return (
      <div className={`w-full ${className}`}>
        {settings && (
          <div className="mb-7 flex animate-pulse items-center justify-between pt-3">
            <div className="ml-5 h-6 w-32 rounded bg-slate-200"></div>
            {settings.showLink && <div className="mr-5 h-6 w-16 rounded bg-blue-100"></div>}
          </div>
        )}
        <div
          className={`grid w-full grid-cols-1 gap-8 ${isFeatured || isRecommended || isWishlist
            ? 'md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
            : 'lg:grid-cols-2 xl:grid-cols-3'
            }`}
        >
          {Array.from({ length: isFeatured || isRecommended || isWishlist ? 4 : 3 }).map((_, index) => (
            <div key={index} className="animate-pulse rounded-2xl border border-slate-100 bg-white p-6">
              <div className="mb-1 flex items-start justify-between">
                <div>
                  <div className="mb-2 h-5 w-32 rounded bg-slate-200"></div>
                  <div className="h-4 w-16 rounded bg-slate-100"></div>
                </div>
                <div className="h-5 w-5 rounded-full bg-slate-200"></div>
              </div>

              <div className="mt-12 mb-16 flex justify-center">
                <div className="h-24 w-48 rounded-lg bg-slate-200"></div>
              </div>

              <div className="mb-6.5 flex items-center justify-between">
                <div className="flex items-center gap-1">
                  <div className="h-4 w-4 rounded bg-slate-200"></div>
                  <div className="h-3 w-8 rounded bg-slate-100"></div>
                </div>
                <div className="flex items-center gap-1">
                  <div className="h-4 w-4 rounded-full bg-slate-200"></div>
                  <div className="h-3 w-12 rounded bg-slate-100"></div>
                </div>
                <div className="flex items-center gap-1">
                  <div className="h-4 w-4 rounded bg-slate-200"></div>
                  <div className="h-3 w-14 rounded bg-slate-100"></div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-baseline gap-1">
                  <div className="h-6 w-16 rounded bg-slate-200"></div>
                </div>
                <div className="h-11 w-28 rounded-md bg-blue-200"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (!renderProducts || renderProducts.length === 0) {
    return <h2 className="text-4xl font-semibold">No products found.</h2>;
  }

  return (
    <div className={`w-full ${className}`}>
      {settings && (
        <div className="mb-5 flex w-full items-center justify-between">
          <h4 className="text-secondary-300 px-5 py-2.5 text-base font-semibold">{settings.title}</h4>
          {settings.showLink && (
            <Link className="text-primary-500 px-5 py-2.5 text-base font-semibold hover:text-blue-800" href="/cars">
              View All
            </Link>
          )}
        </div>
      )}
      <div
        className={`grid w-full grid-cols-1 gap-8 ${isFeatured || isRecommended || isWishlist
          ? 'md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
          : 'lg:grid-cols-2 xl:grid-cols-3'
          }`}
      >
        {renderProducts.map((product) => (
          <ProductCard key={String(product.productid)} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
