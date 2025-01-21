export const metadata = {
  title: 'Minha Aplicação',
  description: 'Descrição genérica da aplicação',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        <header>
          <nav>Navbar genérica</nav>
        </header>
        <main>{children}</main>
        <footer>Rodapé genérico</footer>
      </body>
    </html>
  );
}
