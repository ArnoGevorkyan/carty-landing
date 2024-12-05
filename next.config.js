/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'pbs.twimg.com' },
      { protocol: 'https', hostname: 'abs.twimg.com' },
    ],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
  // Only handle the /home route, redirecting it to root
  async rewrites() {
    return [
      {
        source: '/home',
        destination: '/',
      },
    ];
  },
};

module.exports = nextConfig;
