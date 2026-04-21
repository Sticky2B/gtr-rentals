import Image from "next/image";
import Button from "@/app/ui/Button";

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
		<div className={`
			relative w-full rounded-xl min-h-90
			${darkVersion ? "bg-primary-500" : "bg-information-500"}
			${className}
		`}>
			<Image
				className="absolute w-full h-full object-cover z-10"
				src={darkVersion ? "/images/bg-arrows.svg" : "/images/bg-circles.svg"}
				width={640}
				height={360}
				loading="lazy"
				alt=""
			/>
			<div className="w-full max-w-83 p-6 relative z-30">
				<h2 className="text-[32px] leading-normal text-white tracking-tight font-semibold mb-4">{title}</h2>
				{description && (
					<p className="font-medium text-base text-white mb-5">{description}</p>
				)}
				{linkText && linkUrl && (
					<Button
						href={linkUrl}
						isLink={true}
						variant={darkVersion ? "secondary" : "primary"}
					>
						{linkText}
					</Button>
				)}
			</div>
			{imgSrc && (
				<Image className="absolute bottom-2.5 right-24 z-20" src={imgSrc} width={imgSize} height={116} alt="" loading="lazy" />
			)}
		</div>
	)
};

export default HeroCard;
