import { Card, CardContent } from '@/components/ui/card';
import { Calendar, Award, Users, MapPin, Target, Heart } from 'lucide-react';
import ScrollAnimatedSection from './ScrollAnimatedSection';

const HistorySection = () => {
  const milestones = [
    {
      year: '2008',
      title: 'Fundación del Estudio',
      description: 'Inicio de actividades del estudio jurídico en Barranca, con enfoque en Derecho Civil y Penal.',
      icon: Calendar,
      imageSpace: true,
      image: '/src/assets/historia/fundacion.png'
    },
    {
      year: '2012',
      title: 'Expansión de Servicios',
      description: 'Incorporación de nuevas especialidades y ampliación del equipo legal con abogados especializados.',
      icon: Users,
      imageSpace: true,
      image: '/src/assets/historia/expansion de servicios.png'
    },
    {
      year: '2015',
      title: 'Reconocimiento Regional',
      description: 'Consolidación como el estudio jurídico más grande de Barranca con casos exitosos destacados.',
      icon: Award,
      imageSpace: true,
      image: '/src/assets/historia/reconocimiento regional.png'
    },
    {
      year: '2018',
      title: 'Casos Internacionales',
      description: 'Inicio de representación legal en casos internacionales en Argentina y Brasil.',
      icon: MapPin,
      imageSpace: true,
      image: '/src/assets/historia/casos internacionales.png'
    },
    {
      year: '2020',
      title: 'Modernización Digital',
      description: 'Implementación de tecnología avanzada y servicios de consulta virtual para mejor atención.',
      icon: Target,
      imageSpace: true,
      image: '/src/assets/historia/Modernizacion digital.png'
    },
    {
      year: '2023',
      title: 'Liderazgo Consolidado',
      description: 'Más de 630 casos exitosos y reconocimiento como líder en Derecho Penal y Civil en la región.',
      icon: Heart,
      imageSpace: true,
      image: '/src/assets/historia/liderazgo.png'
    }
  ];

  const values = [
    {
      title: 'Excelencia Jurídica',
      description: 'Compromiso con la más alta calidad en servicios legales y representación profesional.',
      icon: 'legal-shield'
    },
    {
      title: 'Integridad',
      description: 'Actuamos con transparencia, honestidad y ética profesional en todos nuestros casos.',
      icon: 'justice-scale'
    },
    {
      title: 'Compromiso Social',
      description: 'Dedicación al servicio de la comunidad de Barranca y defensa de los derechos ciudadanos.',
      icon: 'courthouse'
    },
    {
      title: 'Innovación',
      description: 'Incorporación de tecnología y métodos modernos para optimizar nuestros servicios legales.',
      icon: 'legal-search'
    }
  ];

  return (
    <ScrollAnimatedSection>
      <section id="historia" className="py-20 subtle-gradient">
        <div className="container mx-auto px-6">
          <ScrollAnimatedSection animationType="fadeInUp" delay={100}>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                Historia y Trayectoria
              </h2>
              <div className="w-24 h-1 gold-gradient mx-auto mb-6"></div>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Más de 15 años construyendo confianza y excelencia jurídica en Barranca. 
                Conoce nuestra evolución desde nuestros inicios hasta convertirnos en el 
                estudio jurídico más grande y reconocido de la región.
              </p>
            </div>
          </ScrollAnimatedSection>

          {/* Línea de tiempo */}
          <div className="relative">
            {/* Línea central */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary/20 via-primary to-primary/20 hidden lg:block"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <ScrollAnimatedSection 
                  key={milestone.year}
                  animationType={index % 2 === 0 ? "fadeInLeft" : "fadeInRight"}
                  delay={200 + (index * 100)}
                >
                  <div className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex-col lg:gap-8`}>
                    {/* Contenido */}
                    <div className="lg:w-1/2 w-full">
                      <Card className="shadow-elegant border-0 bg-white/90 backdrop-blur-sm">
                        <CardContent className="p-8">
                          <div className="flex items-center mb-4">
                            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mr-4">
                              <milestone.icon className="w-6 h-6 text-primary" />
                            </div>
                            <div>
                              <span className="text-2xl font-bold text-primary">{milestone.year}</span>
                            </div>
                          </div>
                          <h3 className="text-xl font-semibold text-primary mb-3">
                            {milestone.title}
                          </h3>
                          <p className="text-muted-foreground leading-relaxed">
                            {milestone.description}
                          </p>
                        </CardContent>
                      </Card>
                    </div>

                    {/* Punto central en línea de tiempo */}
                    <div className="hidden lg:flex items-center justify-center w-4 h-4 bg-primary rounded-full border-4 border-white shadow-lg z-10 my-8 lg:my-0"></div>

                    {/* Espacio para imagen */}
                    <div className="lg:w-1/2 w-full">
                      {milestone.imageSpace && (
                        <div className="h-64 bg-gradient-to-br from-slate-100 to-slate-200 rounded-xl relative overflow-hidden shadow-card">
                          <img 
                            src={milestone.image} 
                            alt={milestone.title}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                          
                          {/* Overlay decorativo */}
                          <div className="absolute top-4 right-4">
                            <div className="bg-white/90 rounded-full p-2">
                              <milestone.icon className="w-5 h-5 text-primary" />
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </ScrollAnimatedSection>
              ))}
            </div>
          </div>

          {/* Valores institucionales */}
          <ScrollAnimatedSection animationType="fadeInUp" delay={800}>
            <div className="mt-20">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-primary mb-4">
                  Nuestros Valores
                </h3>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Los principios que guían nuestro trabajo y definen nuestra filosofía profesional.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {values.map((value, index) => (
                  <ScrollAnimatedSection 
                    key={value.title}
                    animationType="scaleIn"
                    delay={900 + (index * 100)}
                  >
                    <Card className="card-hover border-0 shadow-card bg-white/90 backdrop-blur-sm h-full text-center">
                      <CardContent className="p-6">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                          <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 100 100">
                            <use href={`/src/assets/legal-icons.svg#${value.icon}`}/>
                          </svg>
                        </div>
                        <h4 className="text-lg font-semibold text-primary mb-3">
                          {value.title}
                        </h4>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {value.description}
                        </p>
                      </CardContent>
                    </Card>
                  </ScrollAnimatedSection>
                ))}
              </div>
            </div>
          </ScrollAnimatedSection>
        </div>
      </section>
    </ScrollAnimatedSection>
  );
};

export default HistorySection;