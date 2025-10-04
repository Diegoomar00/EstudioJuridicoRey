import { Scale, Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'El Estudio', href: '#estudio' },
    { name: 'Áreas de Práctica', href: '#areas' },
    { name: 'Contacto', href: '#contacto' },
  ];

  const legalServices = [
    'Derecho Penal',
    'Derecho Corporativo',
    'Derecho Tributario',
    'Derecho Laboral',
    'Derecho de Familia',
    'Derecho Inmobiliario',
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <img 
                src="/src/assets/logo/logo1.png" 
                alt="Estudio Jurídico Logo" 
                className="h-12 w-auto"
              />
              <div>
                <h3 className="text-xl font-bold">ESTUDIO JURÍDICO</h3>
                <p className="text-sm text-primary-foreground/80">Defensa Legal con Excelencia</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              Más de 15 años brindando servicios legales de excelencia con resultados 
              comprobados y la confianza de nuestros clientes.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors duration-300"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors duration-300"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors duration-300"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Enlaces Rápidos</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-accent transition-colors duration-300 animate-underline"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Servicios Legales</h4>
            <ul className="space-y-3">
              {legalServices.map((service) => (
                <li key={service}>
                  <span className="text-primary-foreground/80">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contacto</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                <div className="text-primary-foreground/80">
                  <p className="font-medium">Barranca</p>
                  <p className="text-sm">Jr. Lima 123, Cercado<br />Barranca, Lima</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                <div className="text-primary-foreground/80">
                  <p className="font-medium">Lima</p>
                  <p className="text-sm">Av. Javier Prado Este 4200<br />Santiago de Surco</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-accent flex-shrink-0" />
                <a 
                  href="tel:+51999888777"
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  +51 999 888 777
                </a>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-accent flex-shrink-0" />
                <a 
                  href="mailto:contacto@ricraabogados.com"
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  contacto@ricraabogados.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-primary-foreground/60 text-sm">
              © {currentYear} Estudio Jurídico Pedro Luis Ricra. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-primary-foreground/60 hover:text-accent transition-colors">
                Política de Privacidad
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-accent transition-colors">
                Términos de Servicio
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;