import { useState } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';

const Portfolio = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const portfolioImages = [
    {
      id: 1,
      url: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800',
      category: 'Портрет',
    },
    {
      id: 2,
      url: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800',
      category: 'Свадьба',
    },
    {
      id: 3,
      url: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=800',
      category: 'Fashion',
    },
    {
      id: 4,
      url: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=800',
      category: 'Портрет',
    },
    {
      id: 5,
      url: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800',
      category: 'Свадьба',
    },
    {
      id: 6,
      url: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800',
      category: 'Fashion',
    },
  ];

  return (
    <section id="portfolio" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-light mb-4">Портфолио</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Избранные работы из моих съемок
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioImages.map((image, index) => (
            <div
              key={image.id}
              className="group relative aspect-[3/4] overflow-hidden rounded-lg cursor-pointer animate-fade-in hover-scale"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedImage(image.url)}
            >
              <img
                src={image.url}
                alt={image.category}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-6 left-6 text-white">
                  <p className="text-sm font-medium">{image.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl p-0 bg-transparent border-none">
          {selectedImage && (
            <img
              src={selectedImage}
              alt="Portfolio"
              className="w-full h-auto rounded-lg"
            />
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Portfolio;
