import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';
import path from 'path';

const nextConfig: NextConfig = {
  reactCompiler: true,
  turbopack: {
    root: path.resolve(__dirname, '.'),
  },
};

const withNextIntl = createNextIntlPlugin();

export default withNextIntl(nextConfig);
