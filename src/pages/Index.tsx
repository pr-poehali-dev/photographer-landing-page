import { useEffect, useState } from 'react';
import Hero from '../components/Hero';
import Portfolio from '../components/Portfolio';
import About from '../components/About';
import Services from '../components/Services';
import Booking from '../components/Booking';
import Contact from '../components/Contact';
import Navigation from '../components/Navigation';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'portfolio', 'about', 'services', 'booking', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="smooth-scroll">
      <Navigation activeSection={activeSection} />
      <Hero />
      <Portfolio />
      <About />
      <Services />
      <Booking />
      <Contact />
    </div>
  );
};

export default Index;