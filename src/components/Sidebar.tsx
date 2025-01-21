'use client';
import { useState } from 'react';
import Link from 'next/link';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button onClick={toggleSidebar} className="fixed bottom-4 right-4 btn btn-circle btn-primary md:hidden">
        <span className="material-icons">menu</span>
      </button>
      <div className={`fixed top-0 left-0 w-64 bg-black text-white h-full z-20 transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-4">
          <h2 className="text-2xl font-bold">Menu</h2>
          <ul className="space-y-4 mt-6">
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
        </div>
      </div>
    </>
  );
};

export default Sidebar;
