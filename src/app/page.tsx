// app/page.tsx
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div className="relative">
      <Navbar />
      <Sidebar />
      <Hero />
      <Footer />
    </div>
  );
};

export default HomePage;
