'use client';

import React, { useState, useEffect } from "react";
import Image from "next/image";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Monitorar o scroll da página
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="bg-primary text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-screen-xl mx-auto px-4 py-2 flex justify-between items-center">
        {/* Logo */}
        <div className={`text-2xl font-bold transition-all duration-300 ease-in-out transform ${isScrolled ? "scale-75" : "scale-100" }`} >
          <a href="/">
            <Image
              src="/brand/300px.png"
              alt="Brand Logo"
              width={100}
              height={100}
              className="transition-all duration-300 ease-in-out transform"
              style={{
                maxWidth: isScrolled ? "70%" : "100%",
                height: "auto",
              }}
            />
          </a>
        </div>

        {/* Menu Comum (Desktop e Mobile) */}
        <ul className={`flex flex-col lg:flex-row lg:space-x-6 absolute lg:relative bg-primary w-full lg:w-auto left-0 top-16 lg:top-auto p-4 lg:p-0 space-y-4 lg:space-y-0 transform transition-all duration-300 ease-in-out ${isMenuOpen ? "block" : "hidden lg:flex" }`} >
          <li>
            <a href="/" className="text-lg font-bold hover:text-accent hover:border-b-2 py-2 border-accent transition-all duration-300" > Inicio </a>
          </li>
          <li>
            <a href="/about/" className="text-lg font-bold hover:text-accent hover:border-b-2 py-2 border-accent transition-all duration-300" > Somos Igreja </a>
          </li>
          <li>
            <a href="/events/" className="text-lg font-bold hover:text-accent hover:border-b-2 py-2 border-accent transition-all duration-300" > Programação </a>
          </li>
          <li>
            <a href="/ministerios/" className="text-lg font-bold hover:text-accent hover:border-b-2 py-2 border-accent transition-all duration-300" > Ministérios </a>
          </li>
          <li>
            <a href="/apoio/" className="text-lg font-bold hover:text-accent hover:border-b-2 py-2 border-accent transition-all duration-300" > Orações e Ajuda </a>
          </li>
          <li>
            <a href="/join/" className="text-lg font-bold hover:text-accent hover:border-b-2 py-2 border-accent transition-all duration-300" > Faça Parte </a>
          </li>
          <li>
            <a href="/contact/" className="text-lg font-bold hover:text-accent hover:border-b-2 py-2 border-accent transition-all duration-300" > Fale Conosco </a>
          </li>
        </ul>

        {/* Botão Hamburger para Mobile */}
        <button className="lg:hidden btn btn-square btn-ghost" onClick={() => setIsMenuOpen(!isMenuOpen)} >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" > <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /> </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
