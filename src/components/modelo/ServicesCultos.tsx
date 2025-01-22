// components/ServicesSection.tsx
const ServicesSection = () => {
  return (
    <section className="py-12 bg-100">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-semibold">Programação Semanal</h2>
        <p className="text-lg mt-2">Venha participar das nossas celebrações. Veja os horários abaixo.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
          <div className="card bg-base-200 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Terça</h2>
              <p>Célula - 20:00</p>
            </div>
          </div>
          <div className="card bg-base-200 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Quinta</h2>
              <p>Culto de Libertação</p>
            </div>
          </div>
          <div className="card bg-base-200 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Sábado</h2>
              <p>1º Sábado - Bazar</p>
              <p>Encontro de Oração - 21:00</p>
              <p>Culto dos Adolescentes</p>
            </div>
          </div>
          <div className="card bg-base-200 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Domingo</h2>
              <p>Cultos de Evangelismo e Missões</p>
              <p>Ceia do Senhor</p>
              <p>Família</p>
              <p>Crianças</p>
            </div>
          </div>
        </div>        
        <div className="mt-6">
          <a href="/services" className="btn btn-accent text-white">Programação Completa</a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
