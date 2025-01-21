import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-primary text-white shadow-md z-10">
      <div className="max-w-7xl mx-auto px-4 py-2">
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold">RetroCorp</div>
          <ul className="hidden md:flex space-x-4">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/services">Services</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
          <button className="md:hidden btn btn-square">
            <span className="material-icons">menu</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
