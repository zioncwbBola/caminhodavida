const MainCms = () => {
  return (
    <div className="pt-16 p-8">
      <h1 className="text-3xl font-semibold mb-6">Painel de Administração</h1>
      {/* Adicione o conteúdo dinâmico aqui */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Exemplo de Cards */}
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Gestão de Membros</h2>
            <p>Gerenciar todos os membros da igreja.</p>
          </div>
        </div>
        {/* Adicione mais cards conforme necessário */}
      </div>
    </div>
  );
};

export default MainCms;
