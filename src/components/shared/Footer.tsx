import Image from 'next/image';
import { Link } from '@/i18n/navigation';

const Footer = () => {
  return (
    <footer className="bg-white px-15 pt-20 pb-15">
      <div className="mb-11.5 flex justify-between">
        <div className="max-w-73">
          <Link className="mb-4 inline-block" href="/">
            <Image src="/images/logo.png" width={116} height={44} alt="" loading="lazy" />
          </Link>
          <p className="font-medium text-[#131313]/60">
            Our vision is to provide convenience and help increase your sales business.
          </p>
        </div>
        <div className="flex gap-15">
          <div className="w-full min-w-38">
            <h4 className="text-secondary-500 mb-9 text-xl font-semibold">About</h4>
            <ul className="[&_a:hover]:text-secondary-500 flex flex-col gap-6 font-medium whitespace-nowrap text-[#131313]/60 [&_a]:transition-colors">
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
            <h4 className="text-secondary-500 mb-9 text-xl font-semibold">Community</h4>
            <ul className="[&_a:hover]:text-secondary-500 flex flex-col gap-6 font-medium whitespace-nowrap text-[#131313]/60 [&_a]:transition-colors">
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
            <h4 className="text-secondary-500 mb-9 text-xl font-semibold">Socials</h4>
            <ul className="[&_a:hover]:text-secondary-500 flex flex-col gap-6 font-medium whitespace-nowrap text-[#131313]/60 [&_a]:transition-colors">
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
      <div className="text-secondary-500 flex justify-between border-t border-[rgba(19,19,19,0.16)] pt-9 font-semibold">
        <span>©2022 GTR Rentals. All rights reserved</span>
        <div className="flex gap-15">
          <Link className="hover:text-secondary-400 transition-colors" href="/">
            Privacy & Policy
          </Link>
          <Link className="hover:text-secondary-400 transition-colors" href="/">
            Terms & Conditions
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
