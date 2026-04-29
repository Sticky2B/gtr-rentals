import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  if (!locale || !routing.locales.includes(locale as any)) {
    locale = routing.defaultLocale;
  }

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/global-string?locale=${locale}`, {
      next: { revalidate: 60 }, // Cache for 1 minute during development
    });

    const json = await response.json();
    const messages = json.data || {};

    return {
      locale,
      messages,
    };
  } catch (error) {
    console.error('Failed to fetch translations from Strapi', error);
    return { locale, messages: {} };
  }
});
