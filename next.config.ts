import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  //output: 'export', // Ativa a exportação estática
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
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: '/404',  // Exemplo de reescrita
      },
    ];
  },
};

export default nextConfig;
