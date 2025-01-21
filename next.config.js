/** @type {import('next').NextConfig} */
const nextConfig = {
  //output: 'export', // Ativa a exportação estática
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
