import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ScrollAnimatedSection from './ScrollAnimatedSection';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'María González',
      role: 'Empresaria',
      content: 'Excelente atención y profesionalismo. Resolvieron mi caso corporativo de manera eficiente y con resultados excepcionales.',
      rating: 5,
      company: 'Inversiones MG S.A.C.'
    },
    {
      name: 'Carlos Rodríguez',
      role: 'Contador',
      content: 'Muy profesionales en el manejo de temas tributarios. Su asesoría me ayudó a evitar sanciones y optimizar mis declaraciones.',
      rating: 5,
      company: 'Contabilidad CR'
    },
    {
      name: 'Ana Mendoza',
      role: 'Ama de casa',
      content: 'Me ayudaron en un proceso de divorcio muy complicado. Siempre estuvieron disponibles para resolver mis dudas y me dieron tranquilidad.',
      rating: 5,
      company: 'Cliente Particular'
    },
    {
      name: 'Roberto Silva',
      role: 'Ingeniero',
      content: 'Recuperaron mi dinero en un proceso de cobranza que parecía imposible. Recomiendo ampliamente sus servicios.',
      rating: 5,
      company: 'Construcciones RS'
    },
    {
      name: 'Patricia Lima',
      role: 'Doctora',
      content: 'Profesionales íntegros y competentes. Resolvieron un caso laboral complejo con excelentes resultados para mi clínica.',
      rating: 5,
      company: 'Clínica Santa Patricia'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <ScrollAnimatedSection>
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-6">
          <ScrollAnimatedSection animationType="fadeInUp" delay={100}>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                Lo que Dicen Nuestros Clientes
              </h2>
              <div className="w-24 h-1 gold-gradient mx-auto mb-6"></div>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                La confianza de nuestros clientes es nuestro mayor logro. 
                Conoce las experiencias de quienes han confiado en nosotros.
              </p>
            </div>
          </ScrollAnimatedSection>

          <ScrollAnimatedSection animationType="scaleIn" delay={200}>
            <div className="relative max-w-4xl mx-auto">
              <Card className="shadow-elegant border-0 bg-white">
            <CardContent className="p-12">
              <div className="text-center animate-fade-in" key={currentIndex}>
                {/* Espacio para foto del cliente */}
                <div className="w-20 h-20 bg-gradient-to-br from-slate-100 to-slate-200 rounded-full mx-auto mb-6 relative overflow-hidden shadow-card">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <svg className="w-8 h-8 text-slate-400 mx-auto" fill="currentColor" viewBox="0 0 100 100">
                        <use href="/assets/legal-icons.svg#legal-shield"/>
                      </svg>
                    </div>
                  </div>
                  {/* Overlay con inicial */}
                  <div className="absolute bottom-1 right-1">
                    <div className="w-6 h-6 bg-white/90 rounded-full flex items-center justify-center text-xs font-bold text-primary">
                      {testimonials[currentIndex].name.charAt(0)}
                    </div>
                  </div>
                </div>

                {/* Stars */}
                <div className="flex justify-center space-x-1 mb-8">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 fill-accent text-accent" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-xl md:text-2xl text-foreground mb-8 italic leading-relaxed">
                  "{testimonials[currentIndex].content}"
                </blockquote>

                {/* Author */}
                <div className="space-y-2">
                  <h4 className="text-xl font-semibold text-primary">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-muted-foreground">
                    {testimonials[currentIndex].role} • {testimonials[currentIndex].company}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 rounded-full bg-white shadow-card hover:shadow-elegant transition-all duration-300"
            onClick={goToPrevious}
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 rounded-full bg-white shadow-card hover:shadow-elegant transition-all duration-300"
            onClick={goToNext}
          >
            <ChevronRight className="h-5 w-5" />
          </Button>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-accent shadow-gold' 
                    : 'bg-muted hover:bg-muted-foreground/30'
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
        </ScrollAnimatedSection>

        {/* Trust Indicators */}
        <ScrollAnimatedSection animationType="fadeInUp" delay={400}>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="animate-scale-in">
              <div className="text-3xl font-bold text-accent mb-2">+500</div>
              <p className="text-muted-foreground">Casos Exitosos</p>
            </div>
            <div className="animate-scale-in [animation-delay:0.2s]">
              <div className="text-3xl font-bold text-accent mb-2">15+</div>
              <p className="text-muted-foreground">Años de Experiencia</p>
            </div>
            <div className="animate-scale-in [animation-delay:0.4s]">
              <div className="text-3xl font-bold text-accent mb-2">98%</div>
              <p className="text-muted-foreground">Satisfacción del Cliente</p>
            </div>
          </div>
        </ScrollAnimatedSection>
      </div>
    </section>
    </ScrollAnimatedSection>
  );
};

export default Testimonials;