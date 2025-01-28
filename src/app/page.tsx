'use client';

import AboutSection from '@/components/modelo/AboutSection';
import Hero from '../components/Hero';
import ServicesSection from '@/components/modelo/ServicesCultos';
import MinistriesSection from '@/components/modelo/Ministerios';
import Testimonials from '@/components/modelo/Testimonials';
import Banner from '@/components/modelo/Banner';
import { useState } from 'react';
import LiveAlert from '@/components/HomePage/LiveAlert';

const HomePage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const isLive = true; // Substitua pela lógica para determinar se o canal está ao vivo


  const handleScroll = (role: string) => {
    const element = document.querySelector(`[role="${role}"]`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative bg-base-100">
      {/* Botão para alternar visibilidade */}
      <button
        className={`fixed top-1/2 left-2 z-50 p-2 rounded-full bg-black text-white opacity-75 hover:opacity-100 transform -translate-y-1/2 ${
          isVisible ? 'rotate-180' : ''
        }`}
        onClick={() => setIsVisible(!isVisible)}
        title={isVisible ? 'Ocultar' : 'Mostrar'}
      >
        ➤
      </button>

      {/* Controles com radios */}
      {isVisible && (
        <div className="fixed top-0 left-0 h-full w-64 bg-black bg-opacity-50 p-4 flex flex-col items-start justify-center space-y-4 z-40">
          <form className="bg-white bg-opacity-90 p-4 rounded-lg shadow-md space-y-4 w-full">
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="sections"
                onClick={() => handleScroll('slider')}
              />
              <span>Slider</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="sections"
                onClick={() => handleScroll('sobre')}
              />
              <span>Sobre</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="sections"
                onClick={() => handleScroll('agenda')}
              />
              <span>Agenda</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="sections"
                onClick={() => handleScroll('objetivo')}
              />
              <span>Objetivo</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="sections"
                onClick={() => handleScroll('depoimentos')}
              />
              <span>Depoimentos</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="sections"
                onClick={() => handleScroll('callto')}
              />
              <span>Call to Action</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="sections"
                onClick={() => handleScroll('rodape')}
              />
              <span>Rodapé</span>
            </label>
          </form>
        </div>
      )}
      
      {/* Conteúdo principal */}
      <div className="py-5" role="slider"></div>
      <Hero />
      <div className="py-5" role="sobre"></div>
      <AboutSection />
      <div className="py-5" role="agenda"></div>
      <ServicesSection />
      <div className="py-5" role="objetivo"></div>
      <MinistriesSection />
      <div className="py-5" role="depoimentos"></div>
      <Testimonials />
      <div className="py-5" role="callto"></div>
      <Banner />
      <div className="py-5" role="rodape"></div>
    </div>
  );
};

export default HomePage;
