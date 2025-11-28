import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

const Contact = () => {
  const contactInfo = [
    {
      icon: 'Mail',
      label: 'Email',
      value: 'photo@example.com',
      href: 'mailto:photo@example.com',
    },
    {
      icon: 'Phone',
      label: 'Телефон',
      value: '+7 (999) 123-45-67',
      href: 'tel:+79991234567',
    },
    {
      icon: 'MapPin',
      label: 'Локация',
      value: 'Москва, Россия',
      href: '#',
    },
  ];

  const socialLinks = [
    { icon: 'Instagram', label: 'Instagram', href: 'https://instagram.com' },
    { icon: 'Facebook', label: 'Facebook', href: 'https://facebook.com' },
    { icon: 'MessageCircle', label: 'Telegram', href: 'https://t.me' },
  ];

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-light mb-4">Контакты</h2>
            <p className="text-muted-foreground text-lg">
              Свяжитесь со мной удобным способом
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {contactInfo.map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                className="flex flex-col items-center text-center space-y-4 p-6 rounded-lg hover:bg-muted/50 transition-colors animate-fade-in hover-scale"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon name={item.icon as any} size={28} className="text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">{item.label}</div>
                  <div className="font-medium">{item.value}</div>
                </div>
              </a>
            ))}
          </div>

          <div className="text-center space-y-6 animate-fade-in">
            <p className="text-muted-foreground">Следите за моими работами в социальных сетях</p>
            <div className="flex justify-center gap-4">
              {socialLinks.map((social) => (
                <Button
                  key={social.label}
                  variant="outline"
                  size="lg"
                  asChild
                  className="hover-scale"
                >
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                  >
                    <Icon name={social.icon as any} size={24} />
                  </a>
                </Button>
              ))}
            </div>
          </div>

          <div className="mt-16 pt-8 border-t text-center text-muted-foreground text-sm">
            <p>&copy; {new Date().getFullYear()} Фотограф. Все права защищены.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
