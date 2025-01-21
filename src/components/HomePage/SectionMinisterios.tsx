'use client';
import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Estilos do carousel

const departments = [
  {
    title: 'Marketing',
    description: 'Estratégias e campanhas publicitárias.',
    images: ['/img/01.webp', '/img/01.webp', '/img/01.webp']
  },
  {
    title: 'Tecnologia',
    description: 'Desenvolvimento de software e soluções digitais.',
    images: ['/img/01.webp', '/img/01.webp', '/img/01.webp']
  },
  {
    title: 'Recursos Humanos',
    description: 'Gestão de pessoas e recrutamento.',
    images: ['/img/01.webp', '/img/01.webp', '/img/01.webp']
  }
];

const SectionAccordionCarousel: React.FC = () => {
  const [selectedDepartment, setSelectedDepartment] = useState(departments[0]);

  return (
    <section className="flex flex-col lg:flex-row gap-6 p-6">
      {/* Coluna 1: Acordeão */}
      <div className="lg:w-1/2">
        <div className="accordion w-full">
          {departments.map((dept, index) => (
            <div
              key={index}
              className={`collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mb-2 ${
                selectedDepartment.title === dept.title ? 'collapse-open' : 'collapse-close'
              }`}
            >
              <input
                type="radio"
                name="accordion"
                checked={selectedDepartment.title === dept.title}
                onChange={() => setSelectedDepartment(dept)}
              />
              <div className="collapse-title text-lg font-medium">
                {dept.title}
              </div>
              <div className="collapse-content">
                <p>{dept.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Coluna 2: Carousel */}
      <div className="lg:w-1/2">
        <Carousel
          showThumbs={false}
          showStatus={false}
          infiniteLoop
          useKeyboardArrows
          autoPlay
          dynamicHeight
          className="rounded-box shadow-md"
        >
          {selectedDepartment.images.map((img, index) => (
            <div key={index}>
              <img src={img} alt={`${selectedDepartment.title} ${index + 1}`} className="rounded-box" />
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default SectionAccordionCarousel;
