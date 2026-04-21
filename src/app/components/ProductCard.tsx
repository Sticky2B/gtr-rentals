import Image from "next/image";
import Link from "next/link";
import { GasStation, Lifebuoy, Profile2User } from "iconsax-reactjs";
import Button from "@/app/ui/Button";
import WishlistButton from "@/app/ui/WishlistButton";

interface ProductCardProps {
	productid: string;
	title: string;
	category?: string;
	fuel?: string;
	transmission?: string;
	seats?: string;
	price?: number;
	linkText?: string;
	linkUrl?: string;
	imgSrc?: string;
	imgWidth?: number;
	imgHeight?: number;
}

const ProductCard = ({
	productid,
	title,
	category,
	fuel,
	transmission,
	seats,
	price = 0,
	linkText = "Rent Now",
	linkUrl = "#",
	imgSrc,
	imgWidth,
	imgHeight
}: ProductCardProps) => {
	return (
		<div className="bg-white rounded-xl transition-all hover:shadow-lg">
			<div className="w-full h-full py-5 px-6 flex flex-col min-h-97">
				<div className="relative pr-8">
					<h3 className="text-xl leading-normal tracking-tight text-secondary-500 font-bold mb-0.5 transition-colors hover:text-secondary-400">
						<Link href={linkUrl}>{title}</Link>
					</h3>
					{category && (
						<span className="block text-sm font-bold text-secondary-300">{category}</span>
					)}
					<WishlistButton productId={productid} />
				</div>
				<div className="flex flex-col mt-auto pb-1">
					<div className="flex justify-center items-end">
						{imgSrc ? (
							<Image src={imgSrc} width={imgWidth} height={imgHeight} alt="" loading="lazy" />
						) : (
							<Image className="grayscale opacity-25" src="/images/logo.png" width={180} height={68} alt="" loading="lazy" />
						)}
					</div>
					<div className="flex justify-between items-center pt-15 text-sm text-secondary-300">
						{fuel && (
							<span className="flex items-center gap-1.5">
								<GasStation
									color="var(--color-secondary-300)"
									variant="Bold"
									size={24}
								/>
								<span>{fuel}</span>
							</span>
						)}
						{transmission && (
							<span className="flex items-center gap-1">
								<Lifebuoy
									color="var(--color-secondary-300)"
									variant="Outline"
									size={22}
								/>
								<span>{transmission}</span>
							</span>
						)}
						{seats && (
							<span className="flex items-center gap-1.5">
								<Profile2User
									color="var(--color-secondary-300)"
									variant="Bold"
									size={24}
								/>
								<span>{seats} People</span>
							</span>
						)}
					</div>
					<div className="flex justify-between items-center pt-6">
						{price && (
							<span className="flex items-center font-bold">
								<span className="text-xl text-secondary-500">${price.toFixed(2)}/</span>
								<span className="text-sm text-secondary-300 ml-1">day</span>
							</span>
						)}
						{linkText && linkUrl && (
							<Button
								className="ml-auto"
								href={linkUrl}
								isLink={true}
							>
								{linkText}
							</Button>
						)}
					</div>
				</div>
			</div>
		</div>
	)
};

export default ProductCard;
