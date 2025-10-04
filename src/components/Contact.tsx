import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageCircle,
  Send,
  Star
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import ScrollAnimatedSection from './ScrollAnimatedSection';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    location: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "¡Mensaje enviado!",
      description: "Nos pondremos en contacto contigo muy pronto.",
    });
    setFormData({ name: '', phone: '', email: '', location: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <ScrollAnimatedSection>
      <section id="contacto" className="py-20 subtle-gradient">
        <div className="container mx-auto px-6">
          <ScrollAnimatedSection animationType="fadeInUp" delay={100}>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                Contáctanos
              </h2>
              <div className="w-24 h-1 gold-gradient mx-auto mb-6"></div>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Estamos aquí para ayudarte. Agenda tu consulta gratuita y comencemos 
                a trabajar juntos en la solución de tu caso.
              </p>
            </div>
          </ScrollAnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <ScrollAnimatedSection animationType="fadeInLeft" delay={200}>
              <Card className="shadow-elegant border-0 bg-white">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">
                Solicita tu Consulta Gratuita
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Input
                      name="name"
                      placeholder="Nombre completo"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="h-12"
                    />
                  </div>
                  <div>
                    <Input
                      name="phone"
                      placeholder="Teléfono / WhatsApp"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="h-12"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Input
                      name="email"
                      type="email"
                      placeholder="Correo electrónico"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="h-12"
                    />
                  </div>
                  <div>
                    <Input
                      name="location"
                      placeholder="Ciudad / Ubicación"
                      value={formData.location}
                      onChange={handleChange}
                      className="h-12"
                    />
                  </div>
                </div>

                <div>
                  <Textarea
                    name="message"
                    placeholder="Describe brevemente tu caso o consulta legal..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="min-h-32 resize-none"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full h-12 btn-shine bg-accent hover:bg-accent/90 text-accent-foreground font-semibold shadow-gold"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Enviar Consulta
                </Button>
              </form>
            </CardContent>
          </Card>
          </ScrollAnimatedSection>

          {/* Contact Information */}
          <ScrollAnimatedSection animationType="fadeInRight" delay={300}>
            <div className="space-y-8">
            {/* Quick Contact */}
            <Card className="shadow-card border-0 bg-white">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-primary mb-6">
                  Contacto Directo
                </h3>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                      <Phone className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <p className="font-semibold text-primary">Teléfono</p>
                      <a href="tel:+51999888777" className="text-muted-foreground hover:text-accent transition-colors">
                        +51 999 888 777
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                      <MessageCircle className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <p className="font-semibold text-primary">WhatsApp</p>
                      <a href="https://wa.me/51999888777" className="text-muted-foreground hover:text-accent transition-colors">
                        +51 999 888 777
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                      <Mail className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <p className="font-semibold text-primary">Email</p>
                      <a href="mailto:contacto@ricraabogados.com" className="text-muted-foreground hover:text-accent transition-colors">
                        contacto@ricraabogados.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                      <Clock className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <p className="font-semibold text-primary">Horarios</p>
                      <p className="text-muted-foreground">Lun - Vie: 8:00 - 19:00</p>
                      <p className="text-muted-foreground">Sáb: 9:00 - 15:00</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Offices */}
            <Card className="shadow-card border-0 bg-white">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-primary mb-6">
                  Nuestras Oficinas
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mt-1">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-primary">Barranca - Oficina Principal</p>
                      <p className="text-muted-foreground">
                        Jr. Lima 123, Cercado<br />
                        Barranca, Lima
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mt-1">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-primary">Lima - Oficina de Enlace</p>
                      <p className="text-muted-foreground">
                        Av. Javier Prado Este 4200<br />
                        Santiago de Surco, Lima 33
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Ratings */}
            <Card className="shadow-card border-0 bg-primary text-primary-foreground">
              <CardContent className="p-8 text-center">
                <div className="flex justify-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-8 w-8 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-xl font-semibold mb-2">4.9/5 de calificación</p>
                <p className="text-primary-foreground/80">
                  Basado en +200 reseñas verificadas
                </p>
                <div className="flex justify-center items-center space-x-4 mt-6 pt-6 border-t border-primary-foreground/20">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-accent">+500</div>
                    <div className="text-sm text-primary-foreground/80">Casos Exitosos</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-accent">15+</div>
                    <div className="text-sm text-primary-foreground/80">Años Experiencia</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          </ScrollAnimatedSection>
        </div>
      </div>
    </section>
    </ScrollAnimatedSection>
  );
};

export default Contact;