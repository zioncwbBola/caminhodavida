'use client';
import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-primary text-white">
      <div className="max-w-screen-xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold">Logo</div>

        {/* Menu Desktop */}
        <ul className="hidden md:flex space-x-6">
          <li><a href="#home" className="hover:text-accent">Home</a></li>
          <li><a href="#heroes" className="hover:text-accent">Heroes</a></li>
          <li><a href="#footer" className="hover:text-accent">Footer</a></li>
        </ul>

        {/* Menu Hamburger (Mobile) */}
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Menu Mobile */}
      {isMenuOpen && (
        <div className="md:hidden bg-primary p-4">
          <ul>
            <li><a href="#home" className="block py-2 hover:text-accent">Home</a></li>
            <li><a href="#heroes" className="block py-2 hover:text-accent">Heroes</a></li>
            <li><a href="#footer" className="block py-2 hover:text-accent">Footer</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
