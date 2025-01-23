import Image from "next/image";
const AboutSection = () => {
  return (
    <section className="py-12 bg-base-200 relative" role="about">
      <div className="absolute inset-0">
        <Image
          src="/bg/about.png"
          alt="Hero Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority={true}
          className="z-0"
        />
      </div>
      <div className="relative bg-base-100 p-10 container mx-auto text-center z-10">
        <h2 className="text-4xl font-semibold text-base-content">
          Comunidade Cristã Caminho da Vida
        </h2>
        <p className="text-lg mt-4 text-base-content">
          Somos uma comunidade unida em Cristo, com a missão de espalhar o amor de Deus.
        </p>
        <div className="mt-6">
          <a href="/about" className="btn btn-primary text-white">
            Saiba Mais
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
