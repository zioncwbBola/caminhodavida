// components/Banner.tsx
const Banner = () => {
  return (
    <section className="relative bg-cover bg-center h-[60vh]" style={{ backgroundImage: 'url(/path-to-your-image.jpg)' }}>
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="container mx-auto text-center text-white relative z-10">
        <h1 className="text-5xl font-semibold sm:text-4xl">Bem-vindo à nossa Igreja!</h1>
        <p className="text-xl sm:text-lg mt-4">Junte-se a nós em adoração e aprendizado</p>
        <div className="mt-6">
          <a href="/services" className="btn btn-primary text-white">Assista ao Culto</a>
        </div>
      </div>
    </section>
  );
};

export default Banner;
