import { FaSearch, FaBell, FaUserCircle } from 'react-icons/fa';

const NavbarCms = () => {
  return (
    <div className="fixed top-0 left-0 w-full bg-base-200 z-50 p-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button className="btn btn-ghost lg:hidden">☰</button> {/* Botão de menu */}
          <input type="text" placeholder="Pesquisar..." className="input input-bordered" />
        </div>
        <div className="flex items-center space-x-4">
          <button className="btn btn-ghost">
            <FaBell className="text-xl" />
          </button>
          <button className="btn btn-ghost">
            <FaUserCircle className="text-xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavbarCms;
