// app/layout.tsx
import { ReactNode } from 'react';
import '../styles/globals.css';
import ThemeToggle from '@/components/ToggleTheme'; 

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      </head>
      <body>
        <ThemeToggle />
        {children}
      </body>
    </html>
  );
}
