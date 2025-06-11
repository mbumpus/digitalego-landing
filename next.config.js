/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/socials',
        destination: 'https://bio.fm/socials-6',
        permanent: true,
      },
      {
        source: '/professor',
        destination: '/coming-soon/professor',
        permanent: false,
      },
      {
        source: '/development',
        destination: '/coming-soon/development',
        permanent: false,
      },
      {
        source: '/health',
        destination: '/coming-soon/health',
        permanent: false,
      ];
    ];
  },
};

module.exports = nextConfig;
