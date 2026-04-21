'use client'

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Search from "./Search";
import { Heart, Notification, Setting2 } from "iconsax-reactjs";

const Header = () => {
	const [isStickyHeader, setIsStickyHeader] = useState<boolean>(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsStickyHeader(window.scrollY > 50);
		};

		window.addEventListener('scroll', handleScroll);

		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const iconLinkRounded = "relative w-11 h-11 flex justify-center items-center rounded-full border border-[#c3d4e9]/40 transition-colors hover:border-[#c3d4e9] hover:shadow-sm";

	return (
		<header className={`mx-auto left-0 right-0 shadow-sm fixed z-100 transition-all
			${isStickyHeader ?
				'bg-white/40 top-4 w-[calc(100%-2rem)] p-3 rounded-xl backdrop-blur-sm inset-shadow-xs' :
				'w-full bg-white top-0 py-10 px-8 rounded-0'}`
			}
		>
			<div className="flex items-center">
				<Link href="/">
					<Image src="/images/logo.png" width={116} height={44} alt="" fetchPriority="high" />
				</Link>
				<Search />
				<nav className="flex items-center gap-5 ml-auto">
					<Link className={iconLinkRounded} href="/wishlist">
						<Heart color="var(--color-secondary-400)" variant="Bold" size={24} />
					</Link>
					<Link className={iconLinkRounded} href="/notifications">
						<Notification color="var(--color-secondary-400)" variant="Bold" size={24} />
						<span className="absolute top-0 right-0 rounded-full w-2.75 h-2.75 bg-[#ff4423]"></span>
					</Link>
					<Link className={iconLinkRounded} href="/settings">
						<Setting2 color="var(--color-secondary-400)" variant="Bold" size={24} />
					</Link>
					<Link className="relative w-11 h-11 rounded-full overflow-hidden hover:shadow-md" href="/profile">
						<Image className="w-full h-full absolute object-cover" src="/images/avatar.jpg" width={44} height={44} loading="lazy" alt="" />
					</Link>
				</nav>
			</div>
		</header>
	)
};

export default Header;
