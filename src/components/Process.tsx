import { Card, CardContent } from '@/components/ui/card';
import { Calendar, Search, Gavel } from 'lucide-react';
import ScrollAnimatedSection from './ScrollAnimatedSection';

const Process = () => {
  const steps = [
    {
      icon: Calendar,
      title: 'Reserva tu Consulta',
      description: 'Programa una cita gratuita con nuestros especialistas. Atención presencial y virtual disponible.',
      number: '01'
    },
    {
      icon: Search,
      title: 'Evaluación Personalizada',
      description: 'Analizamos tu caso en detalle y te proporcionamos una estrategia legal específica y clara.',
      number: '02'
    },
    {
      icon: Gavel,
      title: 'Actuamos por Ti',
      description: 'Ejecutamos la estrategia legal con seguimiento constante hasta lograr los mejores resultados.',
      number: '03'
    }
  ];

  return (
    <ScrollAnimatedSection>
      <section className="py-20 hero-gradient text-white">
        <div className="container mx-auto px-6">
          <ScrollAnimatedSection animationType="fadeInUp" delay={100}>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Cómo Resolvemos Tu Caso
              </h2>
              <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
              <p className="text-lg text-gray-200 max-w-2xl mx-auto">
                Un proceso simple y transparente que te garantiza tranquilidad 
                desde el primer momento hasta la resolución exitosa de tu caso.
              </p>
            </div>
          </ScrollAnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
            {/* Connection Lines */}
            <div className="hidden lg:block absolute top-1/2 left-1/3 right-1/3 h-0.5 bg-accent/30 -translate-y-1/2"></div>
            <div className="hidden lg:block absolute top-1/2 left-1/3 w-4 h-4 bg-accent rounded-full -translate-y-1/2 -translate-x-2"></div>
            <div className="hidden lg:block absolute top-1/2 right-1/3 w-4 h-4 bg-accent rounded-full -translate-y-1/2 translate-x-2"></div>

            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <ScrollAnimatedSection 
                  key={step.title}
                  animationType="fadeInUp"
                  delay={200 + (index * 100)}
                >
                  <Card 
                    className="relative bg-white/10 backdrop-blur-sm border-white/20 text-white card-hover animate-slide-up"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                <CardContent className="p-8 text-center relative">
                  {/* Step Number */}
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                    <div className="w-12 h-12 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-bold text-lg shadow-gold">
                      {step.number}
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="mb-6 mt-8">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm">
                      <IconComponent className="h-10 w-10 text-accent" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-semibold mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-200 leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            </ScrollAnimatedSection>
            );
          })}
        </div>

        {/* CTA Section */}
        <ScrollAnimatedSection animationType="scaleIn" delay={600}>
          <div className="text-center mt-16">
            <div className="inline-flex items-center space-x-4 bg-white/10 backdrop-blur-sm rounded-full px-8 py-4 border border-white/20">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-lg font-medium">
                Disponible 24/7 para emergencias legales
              </span>
            </div>
          </div>
        </ScrollAnimatedSection>
      </div>
    </section>
    </ScrollAnimatedSection>
  );
};

export default Process;