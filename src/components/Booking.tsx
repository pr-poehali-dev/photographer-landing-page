import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import Icon from '@/components/ui/icon';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';

const Booking = () => {
  const [date, setDate] = useState<Date>();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!date) {
      toast({
        title: 'Выберите дату',
        description: 'Пожалуйста, выберите желаемую дату съемки',
        variant: 'destructive',
      });
      return;
    }

    toast({
      title: 'Заявка отправлена!',
      description: 'Я свяжусь с вами в ближайшее время для подтверждения',
    });

    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
    setDate(undefined);
  };

  return (
    <section id="booking" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-light mb-4">Бронирование</h2>
            <p className="text-muted-foreground text-lg">
              Заполните форму, и я свяжусь с вами для обсуждения деталей
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 animate-fade-in">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name">Имя *</Label>
                <Input
                  id="name"
                  placeholder="Ваше имя"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="example@mail.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="phone">Телефон *</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+7 (999) 999-99-99"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="service">Тип съемки *</Label>
                <Select
                  value={formData.service}
                  onValueChange={(value) => setFormData({ ...formData, service: value })}
                  required
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Выберите тип съемки" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="portrait">Портретная съемка</SelectItem>
                    <SelectItem value="wedding">Свадебная съемка</SelectItem>
                    <SelectItem value="fashion">Fashion съемка</SelectItem>
                    <SelectItem value="lovestory">Love Story</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label>Желаемая дата съемки *</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-full justify-start text-left font-normal"
                  >
                    <Icon name="Calendar" size={18} className="mr-2" />
                    {date ? format(date, 'PPP', { locale: ru }) : 'Выберите дату'}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    locale={ru}
                    disabled={(date) => date < new Date()}
                  />
                </PopoverContent>
              </Popover>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Сообщение</Label>
              <Textarea
                id="message"
                placeholder="Расскажите о своих пожеланиях к съемке..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={5}
              />
            </div>

            <Button type="submit" size="lg" className="w-full text-lg py-6 hover-scale">
              Отправить заявку
              <Icon name="Send" size={20} className="ml-2" />
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Booking;
