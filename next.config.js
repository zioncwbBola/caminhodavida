/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Ativa a exportação estática
  trailingSlash: true, // Adiciona uma barra no final das URLs (essencial para exportação estática)
  // Outras configurações globais podem ser adicionadas aqui
};

module.exports = nextConfig;
