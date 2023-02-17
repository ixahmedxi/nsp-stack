//@ts-check

!process.env.SKIP_ENV_VALIDATION && (await import('../../env.mjs'));

import { withNx } from '@nrwl/next/plugins/with-nx.js';

/**
 * @type {import('@nrwl/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    svgr: false,
  },
  reactStrictMode: true,
  swcMinify: true,
  eslint: {
    ignoreDuringBuilds: process.env.CI === 'true',
  },
  typescript: {
    ignoreBuildErrors: process.env.CI === 'true',
  },
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
};

export default withNx(nextConfig);
