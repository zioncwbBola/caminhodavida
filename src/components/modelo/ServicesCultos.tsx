// components/ServicesSection.tsx
const ServicesSection = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-semibold">Nossos Cultos</h2>
        <p className="text-lg mt-2">Venha participar das nossas celebrações. Veja os horários abaixo.</p>
        <ul className="mt-6 space-y-4">
          <li className="text-xl">Domingo - 10:00 AM</li>
          <li className="text-xl">Quarta-feira - 7:00 PM</li>
        </ul>
        <div className="mt-6">
          <a href="/services" className="btn btn-accent text-white">Mais Informações</a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
