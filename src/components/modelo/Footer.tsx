// components/Footer.tsx
const Footer = () => {
  return (
    <footer className="bg-primary text-white py-6" role="footer">
      <div className="container mx-auto text-center">
        <p>&copy; 2025 Igreja. Todos os direitos reservados.</p>
        <div className="mt-4">
          <a href="https://facebook.com" className="text-white mx-2">Facebook</a>
          <a href="https://instagram.com" className="text-white mx-2">Instagram</a>
          <a href="https://youtube.com" className="text-white mx-2">YouTube</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
