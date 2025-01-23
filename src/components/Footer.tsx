import Image from "next/legacy/image";
const Footer = () => {
  return (
    <footer className="footer bg-neutral text-white p-10">
      <aside>
        <Image
          src="/brand/300px.png"
          alt="Brand Logo"
          width={100}
          height={100}
        />
        <p className="text-base-content text-white font-bold">
          Caminho da Vida
          <br />
          Comunidade Cristã
        </p>
      </aside>
      <nav>
        <div className="social-icons">
          <h6 className="footer-title text-primary-content text-white">Follow Us</h6>
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              className="link link-hover text-primary"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook fa-2x"></i>
            </a>
            <a
              href="https://twitter.com"
              className="link link-hover text-primary"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter fa-2x"></i>
            </a>
            <a
              href="https://instagram.com"
              className="link link-hover text-primary"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram fa-2x"></i>
            </a>
            <a
              href="https://linkedin.com"
              className="link link-hover text-primary"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin fa-2x"></i>
            </a>
          </div>
        </div>
      </nav>
      <nav >
        <h6 className="footer-title text-primary-content text-white">Services</h6>
        <a className="link link-hover text-base-content text-white">Branding</a>
        <a className="link link-hover text-base-content text-white">Design</a>
        <a className="link link-hover text-base-content text-white">Marketing</a>
        <a className="link link-hover text-base-content text-white">Advertisement</a>
      </nav>
      <nav>
        <h6 className="footer-title text-primary-content text-white">Company</h6>
        <a className="link link-hover text-base-content text-white">About us</a>
        <a className="link link-hover text-base-content text-white">Contact</a>
        <a className="link link-hover text-base-content text-white">Jobs</a>
        <a className="link link-hover text-base-content text-white">Press kit</a>
      </nav>
      <nav>
        <h6 className="footer-title text-primary-content text-white">Legal</h6>
        <a className="link link-hover text-base-content text-white">Terms of use</a>
        <a className="link link-hover text-base-content text-white">Privacy policy</a>
        <a className="link link-hover text-base-content text-white">Cookie policy</a>
      </nav>
    </footer>
  );
};

export default Footer;
