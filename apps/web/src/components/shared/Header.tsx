'use client';

import { useEffect, useState } from 'react';
import { Link } from '@/i18n/routing';
import Image from 'next/image';
import Search from '@/components/shared/Search';
import LocaleSwitcher from '@/components/shared/LocaleSwitcher';
import { Heart, Notification, Setting2 } from 'iconsax-reactjs';

const Header = () => {
  const [isStickyHeader, setIsStickyHeader] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsStickyHeader(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const iconLinkRounded =
    'relative w-11 h-11 flex justify-center items-center rounded-full bg-white/75 border border-[#c3d4e9]/40 transition-colors hover:border-[#c3d4e9] hover:shadow-sm';

  return (
    <header
      className={`fixed right-0 left-0 z-100 mx-auto shadow-sm transition-all ${
        isStickyHeader
          ? 'top-4 w-[calc(100%-2rem)] rounded-xl bg-white/40 p-3 inset-shadow-xs backdrop-blur-sm'
          : 'rounded-0 top-0 w-full bg-white px-8 py-10'
      }`}
    >
      <div className="flex items-center">
        <Link href="/">
          <Image src="/images/logo.png" width={116} height={44} alt="" fetchPriority="high" />
        </Link>
        <Search />
        <nav className="ml-auto flex items-center gap-5">
          <LocaleSwitcher />
          <Link className={iconLinkRounded} href="/wishlist">
            <Heart color="var(--color-secondary-400)" variant="Bold" size={24} />
          </Link>
          <Link className={iconLinkRounded} href="/notifications">
            <Notification color="var(--color-secondary-400)" variant="Bold" size={24} />
            <span className="absolute top-0 right-0 h-2.75 w-2.75 rounded-full bg-[#ff4423]"></span>
          </Link>
          <Link className={iconLinkRounded} href="/settings">
            <Setting2 color="var(--color-secondary-400)" variant="Bold" size={24} />
          </Link>
          <Link className="relative h-11 w-11 overflow-hidden rounded-full hover:shadow-md" href="/profile">
            <Image
              className="absolute h-full w-full object-cover"
              src="/images/avatar.jpg"
              width={44}
              height={44}
              loading="lazy"
              alt=""
            />
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
