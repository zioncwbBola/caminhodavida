// app/layout.tsx
import { ReactNode } from 'react';
import '@/app/styles/globals.css';
import ThemeToggle from '@/components/ToggleTheme';
import Footer from '@/components/Footer';
import Sidebar from '@/components/Sidebar';
import Navbar from '@/components/Navbar';
import { Metadata, Viewport } from 'next';

export const metadata: Metadata = {
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
      </head>
      <body>
        <ThemeToggle />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
