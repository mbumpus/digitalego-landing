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
        destination: 'https://chatgpt.com/g/g-6850aff7ade08191a5cfb80768dc5da0-development-crew-demo',
        permanent: false,
      },
      {
        source: '/health',
        destination: 'https://chatgpt.com/g/g-6850a8ebc3148191aa618799e2ec2c5b-digitalego-wellness-demo',
        permanent: false,
      } // <- ✅ NO semicolon here!
    ];
  },
};

module.exports = nextConfig;
