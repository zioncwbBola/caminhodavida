import Image from 'next/image';
const Hero = () => {
  return (
    // <section id="heroes" className="bg-gray-100 h-96 flex items-center justify-center text-center">
    //   <div className="text-4xl font-bold">Welcome to the Heroes Page!</div>
    // </section>
    <div
      className="hero min-h-screen"
      style={{
      position: 'relative',
      }}>
      <Image
        src="/01.jpg"
        alt="Hero Background"
        layout="fill"
        objectFit="cover"
        quality={100}
      />
    </div>
  );
};

export default Hero;
