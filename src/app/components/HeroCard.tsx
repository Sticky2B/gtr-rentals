import Image from 'next/image';
import Button from '@/app/ui/Button';

interface HeroCardProps {
  darkVersion?: boolean;
  title: string;
  description?: string;
  linkText?: string;
  linkUrl?: string;
  imgSrc?: string;
  imgSize?: number;
  className?: string;
}

const HeroCard = ({
  darkVersion = false,
  title,
  description,
  linkText,
  linkUrl,
  imgSrc,
  imgSize = 406,
  className = '',
}: HeroCardProps) => {
  return (
    <div
      className={`relative min-h-90 w-full rounded-xl ${darkVersion ? 'bg-primary-500' : 'bg-information-500'} ${className} `}
    >
      <Image
        className="absolute z-10 h-full w-full object-cover"
        src={darkVersion ? '/images/bg-arrows.svg' : '/images/bg-circles.svg'}
        width={640}
        height={360}
        loading="lazy"
        alt=""
      />
      <div className="relative z-30 w-full max-w-83 p-6">
        <h2 className="mb-4 text-[32px] leading-normal font-semibold tracking-tight text-white">{title}</h2>
        {description && <p className="mb-5 text-base font-medium text-white">{description}</p>}
        {linkText && linkUrl && (
          <Button href={linkUrl} isLink={true} variant={darkVersion ? 'secondary' : 'primary'}>
            {linkText}
          </Button>
        )}
      </div>
      {imgSrc && (
        <Image
          className="absolute right-24 bottom-2.5 z-20"
          src={imgSrc}
          width={imgSize}
          height={116}
          alt=""
          loading="lazy"
        />
      )}
    </div>
  );
};

export default HeroCard;
