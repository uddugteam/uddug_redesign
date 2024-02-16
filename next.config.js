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
  webpack(config, options) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            icon: true,
            // svgoConfig: {
            //   plugins: [
            //     {
            //       name: 'preset-default',
            //       params: {
            //         overrides: { removeViewBox: false },
            //       },
            //     },
            //   ],
            // },
          },
        },
      ],
    });

    return config;
  },
};

module.exports = nextConfig;
