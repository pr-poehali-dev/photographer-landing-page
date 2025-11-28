import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Services = () => {
  const services = [
    {
      title: 'Портретная съемка',
      description: 'Индивидуальные и семейные фотосессии в студии или на локации',
      price: 'от 8 000 ₽',
      features: ['2 часа съемки', '30+ обработанных фото', 'Помощь с образом', 'Онлайн-галерея'],
      icon: 'User',
    },
    {
      title: 'Свадебная съемка',
      description: 'Полное сопровождение вашего свадебного дня от сборов до банкета',
      price: 'от 30 000 ₽',
      features: ['Полный день', '300+ фото', 'Видеограф в подарок', 'Свадебный альбом'],
      icon: 'Heart',
    },
    {
      title: 'Fashion съемка',
      description: 'Профессиональная съемка для моделей, блогеров и брендов',
      price: 'от 15 000 ₽',
      features: ['3 часа съемки', '50+ фото', 'Профессиональный визаж', 'Коммерческие права'],
      icon: 'Sparkles',
    },
    {
      title: 'Love Story',
      description: 'Романтическая фотосессия для пар в живописных локациях',
      price: 'от 10 000 ₽',
      features: ['1.5 часа съемки', '40+ фото', 'Красивые локации', 'Идеи для позирования'],
      icon: 'Camera',
    },
  ];

  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-light mb-4">Услуги</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Профессиональная фотосъемка для любого повода
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className="hover-scale animate-fade-in border-2 hover:border-primary/50 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Icon name={service.icon as any} size={28} className="text-primary" />
                </div>
                <CardTitle className="text-2xl">{service.title}</CardTitle>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-3xl font-light text-primary">{service.price}</div>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-muted-foreground">
                        <Icon name="Check" size={18} className="text-primary flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
