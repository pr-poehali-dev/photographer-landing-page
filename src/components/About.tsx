import Icon from '@/components/ui/icon';

const About = () => {
  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="animate-fade-in">
            <img
              src="https://cdn.poehali.dev/projects/0faef6f6-9015-45b2-b82a-496c9ed0058b/files/3afb46b0-9012-43c6-acd3-a7b65c552ef5.jpg"
              alt="О фотографе"
              className="rounded-lg shadow-2xl w-full aspect-[3/4] object-cover"
            />
          </div>

          <div className="space-y-6 animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-light">Обо мне</h2>
            
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>
                Привет! Я профессиональный фотограф с более чем 8-летним опытом работы в индустрии.
                Моя страсть — запечатлевать искренние эмоции и создавать кадры, которые останутся с вами навсегда.
              </p>
              
              <p>
                Специализируюсь на портретной, свадебной и fashion-фотографии. Каждая съемка для меня — 
                это возможность рассказать уникальную историю через объектив.
              </p>

              <p>
                Работаю с профессиональным оборудованием Canon и использую современные техники 
                обработки, чтобы ваши фотографии выглядели естественно и элегантно.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 pt-8">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-primary">
                  <Icon name="Award" size={24} />
                  <span className="font-medium">8+ лет опыта</span>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-primary">
                  <Icon name="Camera" size={24} />
                  <span className="font-medium">500+ съемок</span>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-primary">
                  <Icon name="Heart" size={24} />
                  <span className="font-medium">100% довольных клиентов</span>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-primary">
                  <Icon name="Star" size={24} />
                  <span className="font-medium">Премиум качество</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;