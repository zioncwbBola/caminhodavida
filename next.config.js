/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Ativa a exportação estática
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  headers: async () => {
    return [
      {
        // Adiciona o cabeçalho X-Content-Type-Options
        source: '/:path*',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Content-Security-Policy',
            value: "frame-ancestors 'none';"
          },
        ],
      },
    ]
  },
};

module.exports = nextConfig;
