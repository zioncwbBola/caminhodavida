const ServicesSection = () => {
  return (
    <section className="py-12 bg-base-300">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-semibold text-base-content">Programação Semanal</h2>
        <p className="text-lg mt-2 text-base-content">
          Venha participar das nossas celebrações. Veja os horários abaixo.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
          <div className="card bg-base-200 shadow-xl">
            <div className="card-body">
              <h2 className="card-title text-base-content">Terça</h2>
              <p className="text-base-content">Célula - 20:00</p>
            </div>
          </div>
          <div className="card bg-base-200 shadow-xl">
            <div className="card-body">
              <h2 className="card-title text-base-content">Quinta</h2>
              <p className="text-base-content">Culto de Libertação</p>
            </div>
          </div>
          <div className="card bg-base-200 shadow-xl">
            <div className="card-body">
              <h2 className="card-title text-base-content">Sábado</h2>
              <p className="text-base-content">1º Sábado - Bazar</p>
              <p className="text-base-content">Encontro de Oração - 21:00</p>
              <p className="text-base-content">Culto dos Adolescentes</p>
            </div>
          </div>
          <div className="card bg-base-200 shadow-xl">
            <div className="card-body">
              <h2 className="card-title text-base-content">Domingo</h2>
              <p className="text-base-content">Cultos de Evangelismo e Missões</p>
              <p className="text-base-content">Ceia do Senhor</p>
              <p className="text-base-content">Família</p>
              <p className="text-base-content">Crianças</p>
            </div>
          </div>
        </div>
        <div className="mt-6">
          <a href="/services" className="btn btn-accent text-white">
            Programação Completa
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
