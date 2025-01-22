'use client';
import { useState, useEffect } from "react";
import Image from "next/image";

const Hero = () => {
  const Salvation = 'Compartilhar a mensagem de salvação de Jesus Cristo com todos.';
  const Vision = 'Amar e servir à semelhança do amor de Cristo.';
  const Valores = 'Demonstrar o amor de Cristo em todas as nossas ações e relacionamentos.';

  const [currentIndex, setCurrentIndex] = useState(0); // Controla o índice atual
  const items = [Salvation, Vision, Valores]; // Palavras do carousel

  // Alterna automaticamente os itens do carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 3000); // Alterna a cada 3 segundos

    return () => clearInterval(interval); // Limpa o intervalo ao desmontar o componente
  }, [items.length]);

  return (
    <div className="relative w-full hero min-h-[300px]">
      {/* Imagem de fundo */}
      <Image
        src="/banner/world.png"
        alt="Hero Background"
        layout="responsive"
        width={1920}
        height={1080}
        objectFit="cover"
        quality={100}
        priority={true}
      />

      {/* Carousel com fundo escurecido */}
      <div className="absolute inset-0 flex items-center justify-center bg-black/70">
        <div className="w-full max-w-lg text-center">
          <span className="block text-white text-3xl font-bold transition-opacity duration-1000 ease-in-out">
            {items[currentIndex]}
          </span>
        </div>
      </div>

      {/* Indicadores do Carousel */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {items.map((_, index) => (
          <div
            key={index}
            className={`btn btn-xs btn-circle ${
              currentIndex === index ? "btn-primary" : "btn-outline"
            }`}
            onClick={() => setCurrentIndex(index)} // Permite alternar manualmente
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
