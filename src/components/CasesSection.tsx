import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Trophy, MapPin } from 'lucide-react';
import ScrollAnimatedSection from './ScrollAnimatedSection';
// Removed imports - using public paths instead

const CasesSection = () => {
  const cases = [
    {
      id: 1,
      category: 'Derecho Penal',
      title: 'Caso de Tráfico Ilícito de Drogas',
      year: '2023',
      result: 'Absolución Total',
      description: 'Defensa exitosa en caso complejo de narcotráfico internacional con obtención de libertad inmediata.',
      location: 'Lima - Perú',
      imageSpace: true,
      type: 'penal',
      image: "/assets/casos/caso1.jpeg"
    },
    {
      id: 2,
      category: 'Derecho Penal',
      title: 'Crimen Organizado',
      year: '2023',
      result: 'Libertad Inmediata',
      description: 'Representación legal exitosa en caso de organización criminal con estrategia jurídica efectiva.',
      location: 'Barranca - Perú',
      imageSpace: true,
      type: 'penal',
      image: "/assets/casos/caso2.jpeg"
    },
    {
      id: 3,
      category: 'Derecho Civil',
      title: 'Proceso de Sucesión',
      year: '2022',
      result: 'Resolución Favorable',
      description: 'Tramitación exitosa de sucesión intestada con partición equitativa de herencia.',
      location: 'Barranca - Perú',
      imageSpace: true,
      type: 'civil',
      image: "/assets/casos/caso3.jpeg"
    },
    {
      id: 4,
      category: 'Derecho Civil',
      title: 'Desalojo por Ocupación Precaria',
      year: '2023',
      result: 'Recuperación Total',
      description: 'Proceso de desalojo exitoso con recuperación completa del inmueble.',
      location: 'Lima - Perú',
      imageSpace: true,
      type: 'civil',
      image: "/assets/casos/caso4.jpeg"
    },
    {
      id: 5,
      category: 'Derecho Internacional',
      title: 'Caso Internacional - Argentina',
      year: '2022',
      result: 'Éxito Total',
      description: 'Representación legal exitosa en caso internacional con jurisdicción en Argentina.',
      location: 'Buenos Aires - Argentina',
      imageSpace: true,
      type: 'internacional',
      image: "/assets/casos/caso5.jpeg"
    },
    {
      id: 6,
      category: 'Derecho Internacional',
      title: 'Caso Internacional - Brasil',
      year: '2021',
      result: 'Resolución Favorable',
      description: 'Defensa penal exitosa en caso complejo con jurisdicción en Brasil.',
      location: 'São Paulo - Brasil',
      imageSpace: true,
      type: 'internacional',
      image: "/assets/casos/caso6.jpeg"
    }
  ];

  const getCategoryColor = (type: string) => {
    switch (type) {
      case 'penal':
        return 'bg-red-100 text-red-800 border-red-200';
      case 'civil':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'internacional':
        return 'bg-green-100 text-green-800 border-green-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <ScrollAnimatedSection>
      <section id="casos" className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <ScrollAnimatedSection animationType="fadeInUp" delay={100}>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                Casos Ganados
              </h2>
              <div className="w-24 h-1 gold-gradient mx-auto mb-6"></div>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Casos emblemáticos que demuestran nuestra experiencia y compromiso 
                con la excelencia jurídica en Derecho Penal y Civil.
              </p>
            </div>
          </ScrollAnimatedSection>

          {/* Estadísticas destacadas */}
          <ScrollAnimatedSection animationType="scaleIn" delay={200}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              <div className="text-center p-6 bg-white rounded-xl shadow-elegant">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 mb-4">
                  <svg className="w-8 h-8 text-red-600" fill="currentColor" viewBox="0 0 100 100">
                    <use href="/assets/legal-icons.svg#justice-scale"/>
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-red-600 mb-2">350+</h3>
                <p className="text-muted-foreground">Casos Penales Exitosos</p>
              </div>
              
              <div className="text-center p-6 bg-white rounded-xl shadow-elegant">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 100 100">
                    <use href="/assets/legal-icons.svg#legal-document"/>
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-blue-600 mb-2">280+</h3>
                <p className="text-muted-foreground">Casos Civiles Exitosos</p>
              </div>
              
              <div className="text-center p-6 bg-white rounded-xl shadow-elegant">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 100 100">
                    <use href="/assets/legal-icons.svg#courthouse"/>
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-green-600 mb-2">25+</h3>
                <p className="text-muted-foreground">Casos Internacionales</p>
              </div>
            </div>
          </ScrollAnimatedSection>

          {/* Grid de casos */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cases.map((case_, index) => (
              <ScrollAnimatedSection 
                key={case_.id}
                animationType="fadeInUp"
                delay={300 + (index * 100)}
              >
                <Card className="card-hover border-0 shadow-card bg-white h-full overflow-hidden">
                  {/* Espacio para imagen */}
                  {case_.imageSpace && (
                    <div className="h-48 bg-gradient-to-br from-slate-100 to-slate-200 relative overflow-hidden">
                      <img 
                        src={case_.image} 
                        alt={`Imagen del caso: ${case_.title}`}
                        className="w-full h-full object-cover"
                      />
                      {/* Overlay decorativo */}
                      <div className="absolute top-4 right-4">
                        <Trophy className="w-6 h-6 text-amber-500 drop-shadow-lg" />
                      </div>
                      {/* Overlay sutil para mejorar legibilidad */}
                      <div className="absolute inset-0 bg-black/10"></div>
                    </div>
                  )}
                  
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <Badge className={`${getCategoryColor(case_.type)} border`}>
                        {case_.category}
                      </Badge>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4 mr-1" />
                        {case_.year}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-primary mb-3">
                      {case_.title}
                    </h3>
                    
                    <div className="mb-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800 border border-green-200">
                        ✓ {case_.result}
                      </span>
                    </div>
                    
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {case_.description}
                    </p>
                    
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4 mr-1" />
                      {case_.location}
                    </div>
                  </CardContent>
                </Card>
              </ScrollAnimatedSection>
            ))}
          </div>

          {/* Call to action */}
          <ScrollAnimatedSection animationType="fadeInUp" delay={800}>
            <div className="text-center mt-16">
              <div className="bg-white rounded-2xl p-8 shadow-elegant max-w-2xl mx-auto">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                  <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 100 100">
                    <use href="/assets/legal-icons.svg#legal-shield"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">
                  ¿Necesitas Representación Legal?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Nuestro historial de casos exitosos respalda nuestra experiencia. 
                  Consulta gratuita para evaluar tu caso.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="#contacto" 
                    className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
                  >
                    📞 Consulta Gratuita
                  </a>
                  <a 
                    href="https://wa.me/51999888777" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium"
                  >
                    💬 WhatsApp Directo
                  </a>
                </div>
              </div>
            </div>
          </ScrollAnimatedSection>
        </div>
      </section>
    </ScrollAnimatedSection>
  );
};

export default CasesSection;