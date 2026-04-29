export default function strapiImageLoader({ src, width, quality }: { src: string; width: number; quality?: number }) {
  const baseUrl = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1338';
  const fullUrl = src.startsWith('/') ? `${baseUrl}${src}` : src;

  return `${fullUrl}?w=${width}&q=${quality || 80}`;
}
