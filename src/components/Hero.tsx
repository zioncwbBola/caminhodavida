import Image from 'next/image';

const Hero = () => {
  return (
    <div className="w-full hero min-h-[300px]" style={{ position: 'relative' }}>
      <Image
        src="/01.jpg"
        alt="Hero Background"
        layout="responsive" // Faz a imagem ser responsiva
        width={1920}  // Largura de referência
        height={1080} // Altura de referência
        objectFit="cover" // Faz a imagem cobrir todo o espaço disponível
        quality={100} 
      />
    </div>
  );
};

export default Hero;
