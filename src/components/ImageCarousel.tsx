import { useState, useEffect } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, CarouselApi } from '@/components/ui/carousel';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const carouselImages = [
  {
    id: 1,
    url: "/src/assets/instalaciones/oficina 1.png",
    title: "Oficina Principal",
    description: "Nuestras modernas instalaciones en el centro de Barranca"
  },
  {
    id: 2,
    url: "/src/assets/instalaciones/oficina 2.png",
    title: "Sala de Reuniones",
    description: "Espacios diseñados para reuniones estratégicas y consultas privadas"
  },
  {
    id: 3,
    url: "/src/assets/instalaciones/oficina 3.png",
    title: "Área de Trabajo",
    description: "Ambiente profesional y cómodo para nuestro equipo legal"
  },
  {
    id: 4,
    url: "/src/assets/instalaciones/oficina 4.png",
    title: "Recepción",
    description: "Área de bienvenida diseñada para la comodidad de nuestros clientes"
  },
  {
    id: 5,
    url: "/src/assets/instalaciones/oficina 5.png",
    title: "Biblioteca Jurídica",
    description: "Amplia colección de recursos legales y documentación especializada"
  }
];

const ImageCarousel = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  useEffect(() => {
    if (!api) {
      return;
    }

    const interval = setInterval(() => {
      api.scrollNext();
    }, 4000); // Avanza cada 4 segundos

    return () => clearInterval(interval);
  }, [api]);

  return (
    <section className="py-20 bg-subtle-gradient">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
            <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Nuestras Instalaciones
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-4">
            Espacios modernos y profesionales diseñados para brindar la mejor atención legal. 
            Nuestras oficinas combinan elegancia, funcionalidad y tecnología de vanguardia para 
            crear el ambiente ideal donde resolver sus asuntos jurídicos.
          </p>
          <p className="text-base text-muted-foreground/80 max-w-2xl mx-auto">
            Cada detalle ha sido cuidadosamente pensado para garantizar su comodidad y confidencialidad
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Carousel 
            className="w-full"
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent>
              {carouselImages.map((image, index) => (
                <CarouselItem key={image.id} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-2">
                    <div 
                      className="relative group cursor-pointer card-hover rounded-xl overflow-hidden shadow-lg"
                      onClick={() => setSelectedImage(index)}
                    >
                      <img
                        src={image.url}
                        alt={image.title}
                        className="w-full h-80 md:h-96 object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute bottom-6 left-6 right-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <h3 className="font-semibold text-xl">{image.title}</h3>
                        <p className="text-base text-white/90 mt-1">{image.description}</p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4 w-12 h-12" />
            <CarouselNext className="right-4 w-12 h-12" />
          </Carousel>

          {/* Dots de navegación */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: count }, (_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index + 1 === current
                    ? 'bg-primary scale-125'
                    : 'bg-primary/30 hover:bg-primary/50'
                }`}
                onClick={() => api?.scrollTo(index)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Modal for enlarged image */}
      <Dialog open={selectedImage !== null} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl p-0 border-0 bg-transparent">
          <div className="relative">
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 z-10 bg-background/80 hover:bg-background"
              onClick={() => setSelectedImage(null)}
            >
              <X className="h-4 w-4" />
            </Button>
            
            {selectedImage !== null && (
              <div className="relative">
                <img
                  src={carouselImages[selectedImage].url}
                  alt={carouselImages[selectedImage].title}
                  className="w-full h-auto rounded-lg"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/90 to-transparent p-6 rounded-b-lg">
                  <h3 className="text-2xl font-bold text-primary mb-2">
                    {carouselImages[selectedImage].title}
                  </h3>
                  <p className="text-muted-foreground">
                    {carouselImages[selectedImage].description}
                  </p>
                </div>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ImageCarousel;