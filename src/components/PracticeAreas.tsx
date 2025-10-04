import { Card, CardContent } from '@/components/ui/card';
import { 
  Shield, 
  Gavel, 
  Users2, 
  Heart, 
  Home, 
  Scale
} from 'lucide-react';
import ScrollAnimatedSection from './ScrollAnimatedSection';

const PracticeAreas = () => {
  const areas = [
    {
      icon: Shield,
      title: 'Delitos de Tráfico Ilícito de Drogas',
      description: 'Defensa especializada en casos de narcotráfico con historial de absoluciones y penas reducidas. Experiencia en casos complejos nacionales e internacionales.',
      color: 'text-red-500',
      image: '/assets/servicios/Delitos de Tráfico Ilícito de Drogas.jpg'
    },
    {
      icon: Gavel,
      title: 'Crimen Organizado y Bandas Criminales',
      description: 'Representación legal en casos de organizaciones criminales, lavado de activos y delitos conexos. Alto índice de éxito en libertades inmediatas.',
      color: 'text-red-600',
      image: '/assets/servicios/crimen organizado.jpg'
    },
    {
      icon: Scale,
      title: 'Homicidio y Delitos Contra la Vida',
      description: 'Defensa penal especializada en delitos contra la vida, lesiones graves y tentativa de homicidio con estrategias jurídicas efectivas.',
      color: 'text-red-700',
      image: '/assets/servicios/homicidio.jpg'
    },
    {
      icon: Heart,
      title: 'Divorcios y Separación de Bienes',
      description: 'Procesos de divorcio por causales, separación convencional, liquidación de sociedad conyugal y régimen patrimonial.',
      color: 'text-blue-500',
      image: '/assets/servicios/divorcios.jpg'
    },
    {
      icon: Users2,
      title: 'Sucesiones y Herencias',
      description: 'Tramitación de sucesiones intestadas y testamentarias, partición de herencias, declaratorias de herederos y conflictos sucesorios.',
      color: 'text-blue-600',
      image: '/assets/servicios/Herencias.jpg'
    },
    {
      icon: Home,
      title: 'Desalojo y Derecho Inmobiliario',
      description: 'Procesos de desalojo por ocupación precaria, falta de pago, resolución de contratos y recuperación de inmuebles.',
      color: 'text-blue-700',
      image: '/assets/servicios/desalojo-injusto-de-inquilino-1400x933.jpeg'
    }
  ];

  return (
    <ScrollAnimatedSection>
      <section id="areas" className="py-20 subtle-gradient">
        <div className="container mx-auto px-6">
          <ScrollAnimatedSection animationType="fadeInUp" delay={100}>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                Servicios Jurídicos
              </h2>
              <div className="w-24 h-1 gold-gradient mx-auto mb-6"></div>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Ofrecemos servicios legales especializados en Derecho Penal y Civil, 
                con más de 15 años de experiencia defendiendo los derechos de nuestros clientes 
                en Barranca y a nivel nacional e internacional.
              </p>
            </div>
          </ScrollAnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {areas.map((area, index) => {
              const IconComponent = area.icon;
              return (
                <ScrollAnimatedSection 
                  key={area.title}
                  animationType="fadeInUp"
                  delay={200 + (index * 100)}
                >
                  <Card className="card-hover border-0 shadow-card bg-white/80 backdrop-blur-sm h-full">
                    <CardContent className="p-8">
                      {/* Imagen del servicio */}
                      <div className="h-48 bg-gradient-to-br from-slate-100 to-slate-200 rounded-lg mb-6 relative overflow-hidden">
                        <img 
                          src={area.image} 
                          alt={area.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                        
                        {/* Overlay con icono */}
                        <div className="absolute top-4 right-4">
                          <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/90 shadow-sm">
                            <IconComponent className={`h-5 w-5 ${area.color}`} />
                          </div>
                        </div>
                      </div>
                      
                      <div className="text-center">
                        <div className="mb-4">
                          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-secondary">
                            <svg className={`h-6 w-6 ${area.color}`} fill="currentColor" viewBox="0 0 100 100">
                              <use href="/assets/legal-icons.svg#legal-shield"/>
                            </svg>
                          </div>
                        </div>
                        <h3 className="text-xl font-semibold text-primary mb-4">
                          {area.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {area.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
            </ScrollAnimatedSection>
            );
          })}
        </div>

        <ScrollAnimatedSection animationType="scaleIn" delay={800}>
          <div className="text-center mt-12">
            <div className="inline-flex items-center space-x-4 bg-white/80 backdrop-blur-sm rounded-full px-8 py-4 shadow-elegant">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-accent"></div>
                <div className="w-8 h-8 rounded-full bg-primary"></div>
                <div className="w-8 h-8 rounded-full bg-secondary border-2 border-white"></div>
              </div>
              <span className="text-sm font-medium text-primary">
                +500 casos exitosos resueltos
              </span>
            </div>
          </div>
        </ScrollAnimatedSection>
      </div>
    </section>
    </ScrollAnimatedSection>
  );
};

export default PracticeAreas;