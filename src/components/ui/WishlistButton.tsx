'use client';

import { useWishlist } from '@/context/WishlistContext';
import { Heart } from 'iconsax-reactjs';

interface WishlistButtonProps {
  productId: string;
}

const WishlistButton = ({ productId }: WishlistButtonProps) => {
  const { wishlist, toggleWishlist } = useWishlist();
  const isFavorite = wishlist.includes(productId);

  return (
    <button onClick={() => toggleWishlist(productId)} className="absolute -top-1 -right-2 p-2" type="button">
      <Heart
        color={isFavorite ? '#ed3f3f' : 'var(--color-secondary-300)'}
        variant={isFavorite ? 'Bold' : 'Outline'}
        size={24}
      />
    </button>
  );
};

export default WishlistButton;
