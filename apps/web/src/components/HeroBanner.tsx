import HeroCard from '@/components/HeroCard';
import { useTranslations } from 'next-intl';

const HeroBanner = () => {
  const t = useTranslations();

  return (
    <div className="flex w-full gap-8">
      <HeroCard
        title={t('herobanner_left_title')}
        description={t('herobanner_left_description')}
        imgSrc="/cars/koenigsegg-jesko.png"
        linkText="Rental Car"
        linkUrl="/cars/koenigsegg-jesko"
      />
      <HeroCard
        className="max-md:hidden"
        title={t('herobanner_right_title')}
        darkVersion={true}
        description={t('herobanner_right_description')}
        imgSrc="/cars/nissan-gtr.png"
        imgSize={340}
        linkText="Rental Car"
        linkUrl="/cars/nissan-gtr"
      />
    </div>
  );
};

export default HeroBanner;
