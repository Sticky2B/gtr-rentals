import Image from 'next/image';
import { Link } from '@/i18n/routing';
import { Product } from '@/types/product';
import { GasStation, Lifebuoy, Profile2User } from 'iconsax-reactjs';
import Button from '@/components/ui/Button';
import WishlistButton from '@/components/ui/WishlistButton';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { productid, title, category, fuel, transmission, seats, price, imgSrc, imgWidth, imgHeight } = product;
  const linkUrl = `/cars/${productid}`;
  const linkText = 'Rent Now';

  return (
    <div className="rounded-xl bg-white transition-all hover:shadow-lg">
      <div className="flex h-full min-h-97 w-full flex-col px-6 py-5">
        <div className="relative pr-8">
          <h3 className="text-secondary-500 hover:text-secondary-400 mb-0.5 text-xl leading-normal font-bold tracking-tight transition-colors">
            <Link href={linkUrl}>{title}</Link>
          </h3>
          {category && <span className="text-secondary-300 block text-sm font-bold">{category}</span>}
          <WishlistButton productId={String(productid)} />
        </div>
        <div className="mt-auto flex flex-col pb-1">
          <div className="flex items-end justify-center">
            {imgSrc ? (
              <Link href={linkUrl}>
                <Image src={imgSrc} width={imgWidth} height={imgHeight} alt="" loading="lazy" />
              </Link>
            ) : (
              <Image
                className="opacity-25 grayscale"
                src="/images/logo.png"
                width={180}
                height={68}
                alt=""
                loading="lazy"
              />
            )}
          </div>
          <div className="text-secondary-300 flex items-center justify-between pt-15 text-sm">
            {fuel && (
              <span className="flex items-center gap-1.5">
                <GasStation color="var(--color-secondary-300)" variant="Bold" size={24} />
                <span>{fuel}</span>
              </span>
            )}
            {transmission && (
              <span className="flex items-center gap-1">
                <Lifebuoy color="var(--color-secondary-300)" variant="Outline" size={22} />
                <span>{transmission}</span>
              </span>
            )}
            {seats && (
              <span className="flex items-center gap-1.5">
                <Profile2User color="var(--color-secondary-300)" variant="Bold" size={24} />
                <span>{seats} People</span>
              </span>
            )}
          </div>
          <div className="flex items-center justify-between pt-6">
            {price && (
              <span className="flex items-center font-bold">
                <span className="text-secondary-500 text-xl">${price.toFixed(2)}/</span>
                <span className="text-secondary-300 ml-1 text-sm">day</span>
              </span>
            )}
            {linkText && linkUrl && (
              <Button className="ml-auto" href={linkUrl} isLink={true}>
                {linkText}
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
