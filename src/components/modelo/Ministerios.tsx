// components/MinistriesSection.tsx
const MinistriesSection = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-semibold">Ministérios</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold">Ministério Infantil</h3>
            <p className="mt-4">Cuidando das crianças com amor e ensino bíblico.</p>
            <a href="/ministries" className="btn btn-accent text-white mt-4">Saiba Mais</a>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold">Ministério Jovem</h3>
            <p className="mt-4">Conectando os jovens ao propósito de Deus.</p>
            <a href="/ministries" className="btn btn-accent text-white mt-4">Saiba Mais</a>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold">Ação Social</h3>
            <p className="mt-4">Impactando nossa comunidade com amor e serviço.</p>
            <a href="/ministries" className="btn btn-accent text-white mt-4">Saiba Mais</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MinistriesSection;
