// components/AboutSection.tsx
const AboutSection = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-semibold">Sobre Nós</h2>
        <p className="text-lg mt-4">
          Somos uma comunidade unida em Cristo, com a missão de espalhar o amor de Deus.
        </p>
        <div className="mt-6">
          <a href="/about" className="btn btn-primary text-white">Saiba Mais</a>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
