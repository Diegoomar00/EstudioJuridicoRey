import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Mail, Clock, Car, Building, Navigation, MessageCircle } from 'lucide-react';
import ScrollAnimatedSection from './ScrollAnimatedSection';
import mapa1 from '@/assets/mapa/mapa1.jpeg';
import mapa2 from '@/assets/mapa/mapa2.jpg';

const LocationSection = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Dirección',
      content: 'Barranca, Lima, Perú',
      description: 'Ubicados en el corazón de Barranca',
      color: 'text-blue-600'
    },
    {
      icon: Phone,
      title: 'Teléfono',
      content: '+51 999 XXX XXX',
      description: 'Disponible de lunes a viernes',
      color: 'text-green-600'
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'contacto@estudiojuridico.com',
      description: 'Respuesta en 24 horas',
      color: 'text-purple-600'
    },
    {
      icon: Clock,
      title: 'Horarios',
      content: 'Lun - Vie: 8:00 - 18:00',
      description: 'Sáb: 9:00 - 13:00',
      color: 'text-orange-600'
    }
  ];

  const services = [
    {
      title: 'Consulta Presencial',
      description: 'Atención personalizada en nuestras oficinas con cita previa.',
      icon: Building,
      features: ['Consulta inicial gratuita', 'Análisis detallado del caso', 'Plan de acción personalizado']
    },
    {
      title: 'Consulta Virtual',
      description: 'Asesoría legal online para mayor comodidad y accesibilidad.',
      icon: MessageCircle,
      features: ['Videollamada segura', 'Documentos digitales', 'Seguimiento online']
    },
    {
      title: 'Visitas a Domicilio',
      description: 'Servicio especializado para casos que requieren atención in situ.',
      icon: Car,
      features: ['Evaluación en sitio', 'Documentación fotográfica', 'Informe técnico']
    }
  ];

  return (
    <ScrollAnimatedSection>
      <section id="ubicacion" className="py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="container mx-auto px-6">
          <ScrollAnimatedSection animationType="fadeInUp" delay={100}>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                Ubicación y Contacto
              </h2>
              <div className="w-24 h-1 gold-gradient mx-auto mb-6"></div>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Estamos ubicados estratégicamente en Barranca para brindar fácil acceso 
                a nuestros servicios legales. Contáctanos para una consulta personalizada.
              </p>
            </div>
          </ScrollAnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Información de contacto */}
            <ScrollAnimatedSection animationType="fadeInLeft" delay={200}>
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-primary mb-8">
                  Información de Contacto
                </h3>
                
                {contactInfo.map((info, index) => (
                  <ScrollAnimatedSection 
                    key={info.title}
                    animationType="fadeInUp"
                    delay={300 + (index * 100)}
                  >
                    <Card className="card-hover border-0 shadow-card bg-white/90 backdrop-blur-sm">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-slate-100 ${info.color}`}>
                            <info.icon className="w-6 h-6" />
                          </div>
                          <div className="flex-1">
                            <h4 className="text-lg font-semibold text-primary mb-1">
                              {info.title}
                            </h4>
                            <p className="text-lg font-medium text-gray-900 mb-1">
                              {info.content}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              {info.description}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </ScrollAnimatedSection>
                ))}


              </div>
            </ScrollAnimatedSection>

            {/* Mapa y ubicación */}
            <ScrollAnimatedSection animationType="fadeInRight" delay={200}>
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-primary mb-8">
                  Nuestra Ubicación
                </h3>
                
                {/* Mapa de Google Maps */}
                <div className="h-80 rounded-xl relative overflow-hidden shadow-card">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62418.84737181!2d-77.76234!3d-10.75!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105b8c0b0b0b0b0%3A0x0!2sBarranca%2C%20Peru!5e0!3m2!1sen!2spe!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Ubicación del Estudio Jurídico en Barranca"
                    className="rounded-xl"
                  ></iframe>
                  {/* Overlay con botón de navegación */}
                  <div className="absolute bottom-4 right-4">
                    <Button 
                      size="sm" 
                      className="bg-white/95 text-primary hover:bg-white border border-primary/20 shadow-lg"
                      onClick={() => window.open('https://maps.google.com/?q=Barranca,Lima,Peru', '_blank')}
                    >
                      <Navigation className="w-4 h-4 mr-2" />
                      Abrir en Google Maps
                    </Button>
                  </div>
                </div>

                {/* Galería de fotos del estudio */}
                <div className="grid grid-cols-2 gap-4">
                  <ScrollAnimatedSection 
                    animationType="scaleIn"
                    delay={800}
                  >
                    <div className="h-32 bg-gradient-to-br from-slate-100 to-slate-200 rounded-lg relative overflow-hidden shadow-card cursor-pointer hover:shadow-elegant transition-all duration-300">
                      <img 
                        src="/assets/mapa/mapa1.jpeg" 
                        alt="Vista exterior del estudio jurídico - Fachada principal" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </ScrollAnimatedSection>
                  
                  <ScrollAnimatedSection 
                    animationType="scaleIn"
                    delay={900}
                  >
                    <div className="h-32 bg-gradient-to-br from-slate-100 to-slate-200 rounded-lg relative overflow-hidden shadow-card cursor-pointer hover:shadow-elegant transition-all duration-300">
                      <img 
                        src="/assets/mapa/mapa2.jpg" 
                        alt="Vista exterior del estudio jurídico - Entrada lateral" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </ScrollAnimatedSection>
                </div>

                {/* Botones de contacto debajo de las fotos */}
                <ScrollAnimatedSection animationType="fadeInUp" delay={1000}>
                  <div className="flex flex-col sm:flex-row gap-4 mt-6">
                    <Button className="flex-1 bg-primary hover:bg-primary/90 text-white">
                      <Phone className="w-4 h-4 mr-2" />
                      Llamar Ahora
                    </Button>
                    <Button variant="outline" className="flex-1 border-primary text-primary hover:bg-primary hover:text-white">
                      <Mail className="w-4 h-4 mr-2" />
                      Enviar Email
                    </Button>
                  </div>
                </ScrollAnimatedSection>
              </div>
            </ScrollAnimatedSection>
          </div>

          {/* Servicios de atención */}
          <ScrollAnimatedSection animationType="fadeInUp" delay={400}>
            <div className="mb-16">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-primary mb-4">
                  Modalidades de Atención
                </h3>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Ofrecemos diferentes formas de atención para adaptarnos a tus necesidades y comodidad.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {services.map((service, index) => (
                  <ScrollAnimatedSection 
                    key={service.title}
                    animationType="fadeInUp"
                    delay={500 + (index * 100)}
                  >
                    <Card className="card-hover border-0 shadow-card bg-white/90 backdrop-blur-sm h-full">
                      <CardContent className="p-8 text-center">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                          <service.icon className="w-8 h-8 text-primary" />
                        </div>
                        <h4 className="text-xl font-semibold text-primary mb-4">
                          {service.title}
                        </h4>
                        <p className="text-muted-foreground mb-6 leading-relaxed">
                          {service.description}
                        </p>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center justify-center">
                              <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </ScrollAnimatedSection>
                ))}
              </div>
            </div>
          </ScrollAnimatedSection>

          {/* CTA final */}
          <ScrollAnimatedSection animationType="fadeInUp" delay={800}>
            <Card className="border-0 shadow-elegant bg-gradient-to-r from-primary to-primary/90 text-white">
              <CardContent className="p-12 text-center">
                <h3 className="text-3xl font-bold mb-4">
                  ¿Necesitas Asesoría Legal?
                </h3>
                <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
                  Contáctanos hoy mismo para una consulta inicial gratuita. 
                  Estamos aquí para defender tus derechos con más de 15 años de experiencia.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                  <Button size="lg" variant="secondary" className="flex-1 bg-white text-slate-800 hover:bg-slate-100 hover:text-slate-900 font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg">
                    <Phone className="w-5 h-5 mr-2" />
                    Consulta Gratuita
                  </Button>
                  <Button size="lg" variant="secondary" className="flex-1 bg-white text-slate-800 hover:bg-slate-100 hover:text-slate-900 font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Chat Online
                  </Button>
                </div>
              </CardContent>
            </Card>
          </ScrollAnimatedSection>
        </div>
      </section>
    </ScrollAnimatedSection>
  );
};

export default LocationSection;