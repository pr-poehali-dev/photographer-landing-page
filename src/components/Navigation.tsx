import { useState, useEffect } from 'react';
import Icon from '@/components/ui/icon';

interface NavigationProps {
  activeSection: string;
}

const Navigation = ({ activeSection }: NavigationProps) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { id: 'home', label: 'Главная' },
    { id: 'portfolio', label: 'Портфолио' },
    { id: 'about', label: 'Обо мне' },
    { id: 'services', label: 'Услуги' },
    { id: 'booking', label: 'Бронирование' },
    { id: 'contact', label: 'Контакты' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => scrollToSection('home')}
            className="text-2xl font-bold text-foreground hover:text-primary transition-colors"
          >
            Фотограф
          </button>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  activeSection === item.id ? 'text-primary' : 'text-foreground/80'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <button className="md:hidden text-foreground">
            <Icon name="Menu" size={24} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
