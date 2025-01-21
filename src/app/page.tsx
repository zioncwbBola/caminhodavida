import AboutSection from '@/components/modelo/AboutSection';
import Hero from '../components/Hero';
import ServicesSection from '@/components/modelo/ServicesCultos';
import MinistriesSection from '@/components/modelo/Ministerios';
import Testimonials from '@/components/modelo/Testimonials';
import Banner from '@/components/modelo/Banner';


const HomePage = () => {
  return (
    <div className="relative bg-base-100">
      <Hero />
      <AboutSection />
      <ServicesSection />
      <MinistriesSection />
      <Testimonials />
      <Banner />
    </div>
  );
};

export default HomePage;
