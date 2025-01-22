// components/Testimonials.tsx
const Testimonials = () => {
  return (
    <section className="py-12 bg-gray-100" role="testemunhos">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-semibold">O Que Dizem Nossos Membros</h2>
        <div className="mt-6 space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <p className="italic">"A igreja transformou minha vida! Um lugar de acolhimento e ensino."</p>
            <h3 className="text-xl font-semibold mt-4">João da Silva</h3>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <p className="italic">"Sinto-me parte de uma grande família. Cada culto é uma experiência única."</p>
            <h3 className="text-xl font-semibold mt-4">Maria Oliveira</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
