import React from "react";

export default function About() {
  return (
    <div className="min-h-screen bg-base-100 text-base-content">
      <div className="container mx-auto px-4 py-12">
        {/* Título */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-primary">Sobre Nós</h1>
          <p className="mt-2 text-lg text-gray-600">
            Conheça mais sobre nossa história, missão e propósito.
          </p>
        </div>

        {/* Seções */}
        <div className="space-y-12">
          {/* Nossa História */}
          <section className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2">
              <h2 className="text-2xl font-semibold text-secondary">Nossa História</h2>
              <p className="mt-4 text-gray-600">
                A Comunidade Evangélica Caminho da Vida nasceu de um desejo profundo de
                compartilhar o amor de Deus com todos. Desde o início, buscamos ser
                um ponto de luz e esperança para aqueles que precisam, guiados pela
                fé e pela comunhão em Cristo.
              </p>
              <p className="mt-4 text-gray-600">
                Ao longo dos anos, crescemos em número e em propósito, sempre mantendo
                o foco no ensino da Palavra, no cuidado com o próximo e na adoração
                genuína ao Senhor.
              </p>
            </div>
            <div className="lg:w-1/2 mt-8 lg:mt-0">
              <img
                src="/about/history.webp"
                alt="Imagem sobre nossa história"
                className="w-full max-w-md mx-auto rounded-lg shadow-lg"
              />
            </div>
          </section>

          {/* Nossa Missão */}
          <section className="flex flex-col lg:flex-row-reverse items-center">
            <div className="lg:w-1/2">
              <h2 className="text-2xl font-semibold text-secondary">Nossa Missão</h2>
              <p className="mt-4 text-gray-600">
                Nossa missão é levar a mensagem do Evangelho a todos, formando
                discípulos de Cristo que vivam uma vida de amor, santidade e serviço.
                Queremos ser uma comunidade acolhedora, onde cada pessoa encontre
                propósito e sentido em Jesus.
              </p>
              <p className="mt-4 text-gray-600">
                Acreditamos no poder da oração, da Palavra e da comunhão para transformar
                vidas e impactar nossa sociedade para a glória de Deus.
              </p>
            </div>
            <div className="lg:w-1/2 mt-8 lg:mt-0">
              <img
                src="/about/history.webp"
                alt="Imagem sobre nossa missão"
                className="w-full max-w-md mx-auto rounded-lg shadow-lg"
              />
            </div>
          </section>

          {/* Nossos Valores */}
          <section>
            <h2 className="text-2xl font-semibold text-secondary text-center">Nossos Valores</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
              {/* Card 1 */}
              <div className="card bg-base-200 shadow-md">
                <div className="card-body">
                  <h3 className="card-title text-primary">Amor</h3>
                  <p>
                    O amor a Deus e ao próximo é a base de tudo o que fazemos,
                    refletindo o caráter de Cristo em cada ação.
                  </p>
                </div>
              </div>
              {/* Card 2 */}
              <div className="card bg-base-200 shadow-md">
                <div className="card-body">
                  <h3 className="card-title text-primary">Fé</h3>
                  <p>
                    Vivemos pela fé, confiando na soberania de Deus e em Suas
                    promessas para nossas vidas.
                  </p>
                </div>
              </div>
              {/* Card 3 */}
              <div className="card bg-base-200 shadow-md">
                <div className="card-body">
                  <h3 className="card-title text-primary">Comunhão</h3>
                  <p>
                    Valorizamos a unidade do corpo de Cristo, promovendo relacionamentos
                    saudáveis e apoio mútuo.
                  </p>
                </div>
              </div>
              {/* Card 4 */}
              <div className="card bg-base-200 shadow-md">
                <div className="card-body">
                  <h3 className="card-title text-primary">Serviço</h3>
                  <p>
                    Servir ao próximo é uma expressão prática do Evangelho, buscando
                    abençoar nossa comunidade e além.
                  </p>
                </div>
              </div>
              {/* Card 5 */}
              <div className="card bg-base-200 shadow-md">
                <div className="card-body">
                  <h3 className="card-title text-primary">Santidade</h3>
                  <p>
                    Buscamos viver de forma santa e íntegra, como testemunho do
                    poder transformador de Deus.
                  </p>
                </div>
              </div>
              {/* Card 6 */}
              <div className="card bg-base-200 shadow-md">
                <div className="card-body">
                  <h3 className="card-title text-primary">Esperança</h3>
                  <p>
                    Vivemos na esperança do retorno de Cristo, compartilhando essa
                    promessa com todos.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
