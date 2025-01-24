import { ReactNode } from 'react';
import '@/app/styles/globals.css';
import ThemeToggle from '@/components/ToggleTheme';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { Metadata } from 'next';
import Analytics from '@/components/Ads/Analytics';
import { SpeedInsights } from '@vercel/speed-insights/next';
import ConsentBanner from '@/components/termos/Lgpd';

export const metadata: Metadata = {
  metadataBase: new URL('https://caminhodavida.vercel.app/'),
  title: 'Caminho da Vida - Igreja Evangélica',
  description: 'Somos a Comunidade Cristã Caminho da Vida, uma igreja evangélica dedicada a demonstrar o amor de Cristo em todas as ações, oferecer apoio emocional, servir ao próximo e compartilhar a mensagem de salvação de Jesus Cristo.',
  keywords: [
    'Caminho da Vida',
    'Igreja Evangélica',
    'Comunidade Cristã',
    'apoio emocional',
    'fé',
    'amor de Cristo',
    'mensagem de salvação',
    'cultos online',
    'ajuda espiritual',
  ],
  authors: [{ name: 'Comunidade Cristã Caminho da Vida' }],
  robots: 'index, follow',
  openGraph: {
    siteName: 'Caminho da Vida',
    title: 'Caminho da Vida - Igreja Evangélica',
    description: 'Descubra o amor de Cristo, encontre apoio emocional e viva a mensagem de salvação. Faça parte da Comunidade Cristã Caminho da Vida!',
    url: 'https://caminhodavida.vercel.app/',
    type: 'website',
    images: [
      {
        url: '/brand/300px.png',
        width: 800,
        height: 600,
        alt: 'Caminho da Vida - Igreja Evangélica',
      },
      {
        url: '/brand/support.png',
        width: 800,
        height: 600,
        alt: 'Apoio Emocional e Amor de Cristo',
      },
    ],
  },
  icons: {
    icon: '/favicon/favicon.ico',
    apple: '/favicon/apple-touch-icon.png',
  },
  manifest: '/favicon/site.webmanifest',
  other: {
    'google-site-verification': 'f7z7Q-Fme5-I-gy1j0k16sszIaSx8CTDcsxgVWRqKxs',
  },
};



export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-br" data-theme="dark">
      <head>
        {/* Google Analytics */}
        <Analytics />
        {/* Google Fonts */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
        />
        <link rel="icon" href="/favicon/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
      </head>
      <body>
        {/* Barra de Navegação */}
        <Navbar />
        {/* Conteúdo Principal */}
        <main>{children}</main>
        {/* Controle de Tema */}
        <ThemeToggle />
        {/* Rodapé */}
        <Footer />
        <ConsentBanner />
        {/* Métricas de Velocidade */}
        <SpeedInsights />
      </body>
    </html>
  );
}
