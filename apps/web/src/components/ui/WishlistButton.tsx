'use client';

import { useWishlist } from '@/contexts/WishlistContext';
import { Heart } from 'iconsax-reactjs';

interface WishlistButtonProps {
  productId: string;
}

const WishlistButton = ({ productId }: WishlistButtonProps) => {
  const { isFavorite, toggleWishlist, isInitialized } = useWishlist();

  const active = isFavorite(productId);

  if (!isInitialized) {
    return <div className="absolute -top-1 -right-2 h-6 w-6" />;
  }

  return (
    <button
      onClick={() => toggleWishlist(productId)}
      className="absolute -top-1 -right-2 p-2 transition-transform active:scale-90"
      type="button"
      aria-label={active ? 'Remove from wishlist' : 'Add to wishlist'}
    >
      <Heart
        color={active ? '#ed3f3f' : 'var(--color-secondary-300)'}
        variant={active ? 'Bold' : 'Outline'}
        size={24}
      />
    </button>
  );
};

export default WishlistButton;
