const MinistriesSection = () => {
  return (
    <section className="py-20 bg-base-200" role="ministerios">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-semibold text-base-content">Qual nosso propósito como Igreja?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
          <div className="bg-base-100 p-6 rounded-lg shadow-xl">
            <h3 className="text-2xl font-semibold text-base-content">Autoconhecimento emocional</h3>
          </div>
          <div className="bg-base-100 p-6 rounded-lg shadow-xl">
            <h3 className="text-2xl font-semibold text-base-content">Empatia</h3>
          </div>
          <div className="bg-base-100 p-6 rounded-lg shadow-xl">
            <h3 className="text-2xl font-semibold text-base-content">Automotivação</h3>
          </div>
          <div className="bg-base-100 p-6 rounded-lg shadow-xl">
            <h3 className="text-2xl font-semibold text-base-content">Relacionamento Interpessoal</h3>
          </div>
          <div className="bg-base-100 p-6 rounded-lg shadow-xl">
            <h3 className="text-2xl font-semibold text-base-content">Controle das Emoções</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MinistriesSection;
