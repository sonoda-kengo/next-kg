/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: "export",
};
const nextTranslate = require('next-translate');

module.exports = nextConfig;
module.exports = nextTranslate();
module.exports = {
  async rewrites() {
    return [
      {
        source: '/rss',
        destination: 'https://note.com/magn_kengo/rss',
      },
    ];
  },
};
module.exports = {
  images: {
    domains: ['assets.st-note.com'],
  },
};
