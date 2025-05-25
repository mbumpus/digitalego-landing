// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/socials',
        destination: 'https://bio.fm/socials-6',
        permanent: true, // Use false if this might change in the future
      },
    ];
  },
};

module.exports = nextConfig;
