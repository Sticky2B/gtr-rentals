'use client';

import React from 'react';
import { Global } from 'iconsax-reactjs';
import { useLocaleContext } from '@/context/LocaleContext';

const LocaleSwitcher = () => {
  const { locale, toggleLocale, isPending } = useLocaleContext();

  return (
    <button
      className={`group flex w-14 items-center gap-2 transition-all ${
        isPending ? 'pointer-events-none cursor-default opacity-30' : 'hover:opacity-60'
      }`}
      type="button"
      onClick={toggleLocale}
      disabled={isPending}
    >
      <Global color="var(--color-secondary-400)" size={24} />
      <span className="text-uppercase text-xs font-bold">{locale.toUpperCase()}</span>
    </button>
  );
};

export default LocaleSwitcher;
