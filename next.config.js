/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  poweredByHeader: false,
  assetPrefix: '.',
  images: {
    loader: 'akamai',
    path: '',
  },
};

module.exports = nextConfig;
