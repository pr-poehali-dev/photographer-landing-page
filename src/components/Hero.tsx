import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Hero = () => {
  const scrollToBooking = () => {
    const element = document.getElementById('booking');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-muted/30 to-background"
    >
      <div className="absolute inset-0 bg-[url('https://cdn.poehali.dev/projects/0faef6f6-9015-45b2-b82a-496c9ed0058b/files/54433fee-dc42-4048-9f85-4bf3d10e9d3a.jpg')] bg-cover bg-center opacity-10" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-light tracking-tight">
            Искусство
            <span className="block text-primary">момента</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto font-light">
            Создаю фотографии, которые рассказывают истории и останавливают время
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button
              size="lg"
              onClick={scrollToBooking}
              className="text-lg px-8 py-6 hover-scale"
            >
              Забронировать съемку
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-lg px-8 py-6"
            >
              Посмотреть работы
              <Icon name="ArrowDown" size={20} className="ml-2" />
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <Icon name="ChevronDown" size={32} className="text-muted-foreground" />
      </div>
    </section>
  );
};

export default Hero;