import HeroCard from './HeroCard';

const HeroBanner = () => {
	return (
		<div className="w-full flex gap-8">
			<HeroCard
				title="The Best Platform for Car Rental"
				description="Ease of doing a car rental safely and reliably. Of course at a low price."
				imgSrc="/cars/koenigsegg-jesko.png"
				linkText="Rental Car"
				linkUrl="/cars/car"
			/>
			<HeroCard
				className="max-md:hidden"
				title="Easy way to rent a car at a low price"
				darkVersion={true}
				description="Providing cheap car rental services and safe and comfortable facilities."
				imgSrc="/cars/nissan-gtr.png"
				imgSize={340}
				linkText="Rental Car"
				linkUrl="/cars/car"
			/>
		</div>
	)
};

export default HeroBanner;
