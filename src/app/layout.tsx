// app/layout.tsx
import { ReactNode } from 'react';
import '@/app/styles/globals.css';
import ThemeToggle from '@/components/ToggleTheme';
import Footer from '@/components/Footer';
import Sidebar from '@/components/Sidebar';
import Navbar from '@/components/Navbar';
import { Metadata, Viewport} from 'next';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from "@vercel/speed-insights/next"



export const metadata: Metadata = {
  metadataBase: new URL('https://caminhodavida.vercel.app/'),
  title: 'Caminho da Vida',
  description: 'Bem-vindo ao Caminho da Vida',
  keywords: ['Caminho da Vida', 'chat', 'comunidade'],
  authors: [{ name: 'Seu Nome' }],
  robots: 'index, follow',
  openGraph: {
    siteName: 'Caminho da Vida',
    title: 'Caminho da Vida',
    description: 'Bem-vindo ao Caminho da Vida',
    url: 'https://caminhodavida.vercel.app/',
    images: [
      {
        url: '/brand/300px.png',
        width: 800,
        height: 600,
        alt: 'Caminho da Vida Logo',
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

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-br" data-theme="dark">
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
        <link rel="icon" href="/favicon/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
      </head>
      <body>
        <ThemeToggle />
        <Navbar />
        {children}
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
