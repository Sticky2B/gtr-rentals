import Link from "next/link";
import Image from "next/image";

const Footer = () => {
	return (
		<footer className="bg-white pt-20 pb-15 px-15">
			<div className="flex justify-between mb-11.5">
				<div className="max-w-73">
					<Link className="inline-block mb-4" href="/">
						<Image src="/images/logo.png" width={116} height={44} alt="" loading="lazy" />
					</Link>
					<p className="font-medium text-[#131313]/60">
						Our vision is to provide convenience and help increase your sales business.
					</p>
				</div>
				<div className="flex gap-15">
					<div className="w-full min-w-38">
						<h4 className="mb-9 font-semibold text-xl text-secondary-500">About</h4>
						<ul className="flex flex-col gap-6 whitespace-nowrap font-medium text-[#131313]/60 [&_a]:transition-colors [&_a:hover]:text-secondary-500">
							<li>
								<Link href="/">How it works</Link>
							</li>
							<li>
								<Link href="/">Featured</Link>
							</li>
							<li>
								<Link href="/">Partnership</Link>
							</li>
							<li>
								<Link href="/">Business Relations</Link>
							</li>
						</ul>
					</div>
					<div className="w-full min-w-38">
						<h4 className="mb-9 font-semibold text-xl text-secondary-500">Community</h4>
						<ul className="flex flex-col gap-6 whitespace-nowrap font-medium text-[#131313]/60 [&_a]:transition-colors [&_a:hover]:text-secondary-500">
							<li>
								<Link href="/">Events</Link>
							</li>
							<li>
								<Link href="/">Blog</Link>
							</li>
							<li>
								<Link href="/">Podcast</Link>
							</li>
							<li>
								<Link href="/">Invite a friend</Link>
							</li>
						</ul>
					</div>
					<div className="w-full min-w-38">
						<h4 className="mb-9 font-semibold text-xl text-secondary-500">Socials</h4>
						<ul className="flex flex-col gap-6 whitespace-nowrap font-medium text-[#131313]/60 [&_a]:transition-colors [&_a:hover]:text-secondary-500">
							<li>
								<Link href="/">Discord</Link>
							</li>
							<li>
								<Link href="/">Instagram</Link>
							</li>
							<li>
								<Link href="/">Twitter</Link>
							</li>
							<li>
								<Link href="/">Facebook</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div className="flex justify-between pt-9 border-t border-[rgba(19,19,19,0.16)] text-secondary-500 font-semibold">
				<span>©2022 GTR Rentals. All rights reserved</span>
				<div className="flex gap-15">
					<Link className="transition-colors hover:text-secondary-400" href="/">Privacy & Policy</Link>
					<Link className="transition-colors hover:text-secondary-400" href="/">Terms & Conditions</Link>
				</div>
			</div>
		</footer>
	)
};

export default Footer;
