import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Scale, Phone } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Servicios', href: '#areas' },
    { name: 'Trayectoria', href: '#historia' },
    { name: 'Casos Ganados', href: '#casos' },
    { name: 'Equipo', href: '#equipo' },
    { name: 'Contacto', href: '#ubicacion' },
  ];

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 animate-fade-in-down ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/50 shadow-lg py-1.5 md:py-2' 
          : 'bg-transparent py-2 md:py-4'
      }`}
    >
      <div className="container mx-auto px-6 md:px-6 flex items-center justify-between animate-fade-in">
        {/* Logo */}
        <div className="flex items-center space-x-2 md:space-x-3 animate-slide-in-left">
          <img 
            src={isScrolled ? '/src/assets/logo/logo2.png' : '/src/assets/logo/logo1.png'}
            alt="Estudio Jurídico Rey"
            className="h-8 w-8 md:h-10 md:w-10 transition-all duration-500 object-contain"
          />
          <div>
            <h1 className={`text-lg md:text-xl font-bold transition-colors duration-500 ${
              isScrolled ? 'text-slate-800' : 'text-white'
            }`}>
              ESTUDIO JURÍDICO REY
            </h1>
            <p className={`text-xs transition-colors duration-500 ${
              isScrolled ? 'text-slate-600' : 'text-slate-200'
            }`}>
              Defensa Legal con Excelencia
            </p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center animate-slide-in-right">
          {navigationItems.map((item, index) => (
            <div key={item.name} className="flex items-center">
              <a
                href={item.href}
                onClick={(e) => handleSmoothScroll(e, item.href)}
                className={`px-4 py-2 transition-all duration-500 font-medium animate-underline transform hover:scale-105 ${
                  isScrolled 
                    ? 'text-slate-700 hover:text-amber-600' 
                    : 'text-white hover:text-amber-400'
                }`}
              >
                {item.name}
              </a>
              {index < navigationItems.length - 1 && (
                <div className={`h-4 w-px mx-2 transition-colors duration-500 ${
                  isScrolled ? 'bg-slate-300' : 'bg-white/30'
                }`} />
              )}
            </div>
          ))}
        </nav>

        {/* Contact Button & Mobile Menu */}
        <div className="flex items-center space-x-2 md:space-x-4">
          <Button 
            variant={isScrolled ? "outline" : "secondary"} 
            size="sm" 
            className={`hidden md:flex items-center space-x-2 transition-all duration-500 ${
              isScrolled 
                ? '' 
                : 'bg-white/10 backdrop-blur-sm text-white border-white/20 hover:bg-white/20'
            }`}
          >
            <Phone className="h-4 w-4" />
            <span>Llamar Ahora</span>
          </Button>
          
          <Button
            variant="ghost"
            size="sm"
            className={`lg:hidden p-1.5 transition-colors duration-500 ${
              isScrolled ? '' : 'text-white hover:bg-white/10'
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className={`lg:hidden border-t border-slate-200/30 animate-fade-in transition-all duration-500 ${
          isScrolled ? 'bg-white/95 backdrop-blur-md' : 'bg-black/50 backdrop-blur-md'
        }`}>
          <nav className="container mx-auto px-4 py-4 space-y-2">
            {navigationItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`block transition-all duration-500 font-medium py-2.5 px-3 rounded-lg transform hover:translate-x-1 ${
                  isScrolled 
                    ? 'text-slate-700 hover:text-amber-600 hover:bg-amber-50' 
                    : 'text-white hover:text-amber-400 hover:bg-white/10'
                }`}
                onClick={(e) => {
                  handleSmoothScroll(e, item.href);
                  setIsMobileMenuOpen(false);
                }}
              >
                {item.name}
              </a>
            ))}
            <Button 
              variant={isScrolled ? "default" : "secondary"} 
              className={`w-full mt-3 transition-all duration-500 ${
                isScrolled 
                  ? '' 
                  : 'bg-white/10 backdrop-blur-sm text-white border-white/20 hover:bg-white/20'
              }`}
            >
              <Phone className="h-4 w-4 mr-2" />
              Contactar
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;