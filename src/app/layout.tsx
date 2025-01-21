// app/layout.tsx
import { ReactNode } from 'react';
import '../styles/globals.css';
import ThemeToggle from '@/components/ToggleTheme';
import Footer from '@/components/Footer';
import Sidebar from '@/components/Sidebar';
import Navbar from '@/components/Navbar';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-br" data-theme="dark">
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      </head>
      <body>
        <ThemeToggle />
        <Sidebar />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
