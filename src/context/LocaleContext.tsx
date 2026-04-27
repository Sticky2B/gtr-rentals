'use client';

import React, { createContext, useContext, useTransition } from 'react';
import { useRouter, usePathname } from '@/i18n/navigation';
import { useParams } from 'next/navigation';

interface LocaleContextType {
  locale: string;
  toggleLocale: () => void;
  isPending: boolean;
}

export const LocaleContext = createContext<LocaleContextType | undefined>(undefined);

export const useLocaleContext = () => {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error('useLocaleContext must be used within a LocaleProvider');
  }
  return context;
};

export type LocaleProviderProps = {
  locale: string;
  children: React.ReactNode;
};

export const LocaleProvider = ({ locale, children }: LocaleProviderProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const [isPending, startTransition] = useTransition();

  const toggleLocale = () => {
    const nextLocale = locale === 'en' ? 'sr' : 'en';

    startTransition(() => {
      router.replace(
        // @ts-expect-error -- next-intl pathnames can be complex
        { pathname, params },
        { locale: nextLocale }
      );
    });
  };

  return <LocaleContext.Provider value={{ locale, toggleLocale, isPending }}>{children}</LocaleContext.Provider>;
};
