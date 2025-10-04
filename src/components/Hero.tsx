import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, Scale } from 'lucide-react';
import backgroundImage from '@/assets/background.jpg';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { useCounterAnimation } from '@/hooks/use-counter-animation';
import React from 'react';

const Hero = () => {
  const { elementRef: statsRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.3,
    triggerOnce: true
  });

  const casosGanados = useCounterAnimation({ target: 630, duration: 2000, startOnVisible: false });
  const anosExperiencia = useCounterAnimation({ target: 15, duration: 1500, startOnVisible: false });
  const porcentajeExito = useCounterAnimation({ target: 98, duration: 1800, startOnVisible: false });

  // Función para navegación suave
  const handleSmoothScroll = (href: string) => {
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  // Iniciar animaciones cuando el elemento sea visible
  React.useEffect(() => {
    if (isIntersecting) {
      casosGanados.startAnimation();
      anosExperiencia.startAnimation();
      porcentajeExito.startAnimation();
    }
  }, [isIntersecting]);

  return (
    <section id="inicio" className="relative min-h-screen md:min-h-screen flex items-center overflow-hidden pt-20 md:pt-24 z-10">
      {/* Mobile Background - With image extending to top */}
      <div 
        className="absolute inset-0 md:hidden" 
        style={{backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center top'}}
      >
        <div className="absolute inset-0 bg-slate-900/75"></div>
      </div>
      
      {/* Desktop Background - With image */}
      <div 
        className="absolute inset-0 hidden md:block" 
        style={{backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center'}}
      >
        <div className="absolute inset-0 bg-slate-900/90"></div>
      </div>
      
      {/* Modern geometric background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-amber-500/5 to-transparent z-10"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-400/3 rounded-full blur-3xl z-10"></div>
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-blue-500/3 rounded-full blur-2xl z-10"></div>
      </div>

      <div className="relative z-20 w-full px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="grid lg:grid-cols-10 gap-4 md:gap-8 items-start lg:items-center min-h-[calc(100vh-8rem)] md:min-h-[calc(100vh-6rem)] max-w-6xl xl:max-w-7xl mx-auto pt-4 md:pt-0">
          {/* Left Content - Enhanced */}
          <div className="lg:col-span-6 lg:col-start-1 space-y-3 sm:space-y-4 md:space-y-6 lg:space-y-8 text-center md:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-amber-400/10 border border-amber-400/20 rounded-full text-amber-400 text-xs md:text-sm font-medium animate-fade-in-up animation-delay-200 mt-2 md:mt-0">
              <Shield className="w-3 h-3 md:w-4 md:h-4" />
              Estudio Jurídico Líder
            </div>

            <div className="space-y-3 sm:space-y-4 md:space-y-6">
              <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] md:leading-[0.9] tracking-tight animate-fade-in-up animation-delay-400">
                Expertos en derecho penal y civil en{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-300">
                  Barranca
                </span>
              </h1>
              
              <p className="hidden md:block text-sm sm:text-base md:text-lg lg:text-xl text-slate-200 max-w-xl lg:max-w-2xl leading-relaxed font-light animate-fade-in-up animation-delay-600 mx-auto md:mx-0">
                Defendemos tus derechos con experiencia y dedicación. Más de 15 años brindando soluciones legales efectivas.
              </p>
            </div>

            {/* Mobile Image - Shown only on mobile after title */}
            <div className="flex lg:hidden justify-center animate-fade-in-up animation-delay-700 py-2">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-amber-400/20 to-blue-500/20 rounded-2xl blur opacity-75"></div>
                <div className="relative w-40 h-52 sm:w-48 sm:h-60 rounded-2xl overflow-hidden">
                  <img 
                    src="/src/assets/abogado1.png" 
                    alt="Abogado profesional del estudio jurídico"
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
                  
                  {/* Professional badge overlay for mobile */}
                  <div className="absolute bottom-2 left-2 right-2">
                    <div className="bg-slate-800/80 backdrop-blur-sm border border-slate-700/50 rounded-md p-1.5">
                      <div className="flex items-center gap-1.5">
                        <div className="p-1 bg-amber-400/10 rounded-sm">
                          <Scale className="w-2.5 h-2.5 text-amber-400" />
                        </div>
                        <div>
                          <h3 className="text-white font-semibold text-xs leading-tight">Dr. Pedro Luis Ricra</h3>
                          <p className="text-slate-300 text-xs leading-tight">Director</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats - Mobile Optimized - Moved up */}
            <div ref={statsRef} className="pt-3 md:hidden animate-fade-in-up animation-delay-800">
              <div className="grid grid-cols-3 gap-3">
                <div className="text-center bg-slate-800/30 backdrop-blur-sm rounded-lg p-2.5 border border-slate-700/30">
                  <div className="text-lg font-bold text-amber-400 mb-0.5">{casosGanados.count}+</div>
                  <div className="text-xs text-slate-300 leading-tight">Casos<br/>Exitosos</div>
                </div>
                <div className="text-center bg-slate-800/30 backdrop-blur-sm rounded-lg p-2.5 border border-slate-700/30">
                  <div className="text-lg font-bold text-amber-400 mb-0.5">{anosExperiencia.count}+</div>
                  <div className="text-xs text-slate-300 leading-tight">Años de<br/>Trayectoria</div>
                </div>
                <div className="text-center bg-slate-800/30 backdrop-blur-sm rounded-lg p-2.5 border border-slate-700/30">
                  <div className="text-lg font-bold text-amber-400 mb-0.5">{porcentajeExito.count}%</div>
                  <div className="text-xs text-slate-300 leading-tight">Éxito</div>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-2.5 md:gap-4 pt-2 md:pt-4 animate-fade-in-up animation-delay-900 justify-center md:justify-start">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-slate-900 font-semibold px-5 py-2.5 md:px-8 md:py-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-amber-400/25 group text-sm md:text-base"
              >
                Consulta Gratuita
                <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                variant="outline"
                size="lg"
                className="border-slate-700 text-slate-800 hover:bg-slate-900 hover:text-white hover:border-slate-900 px-5 py-2.5 md:px-8 md:py-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg font-semibold text-sm md:text-base"
                onClick={() => handleSmoothScroll('#casos')}
              >
                Ver Casos de Éxito
              </Button>
            </div>

            {/* Stats - Desktop version */}
            <div ref={statsRef} className="hidden md:block pt-8 animate-fade-in-up animation-delay-1000">
              <div className="flex justify-start gap-8 lg:gap-12 border-t border-slate-700/50 pt-8">
                <div className="text-center">
                  <div className="text-3xl lg:text-4xl xl:text-5xl font-bold text-amber-400">{casosGanados.count}+</div>
                  <div className="text-base lg:text-lg text-slate-400">Casos Exitosos</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl lg:text-4xl xl:text-5xl font-bold text-amber-400">{anosExperiencia.count}+</div>
                  <div className="text-base lg:text-lg text-slate-400">Años de Trayectoria</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl lg:text-4xl xl:text-5xl font-bold text-amber-400">{porcentajeExito.count}%</div>
                  <div className="text-base lg:text-lg text-slate-400">Éxito</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Hidden on mobile, visible on desktop */}
          <div className="hidden lg:flex lg:col-span-4 justify-center animate-fade-in-right animation-delay-600">
            <div className="relative group">
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-amber-400/20 to-blue-500/20 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              
              <div className="relative w-80 h-[500px] lg:w-96 lg:h-[600px] rounded-2xl overflow-hidden">
                <img 
                  src="/src/assets/abogado1.png" 
                  alt="Abogado profesional del estudio jurídico"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
                
                {/* Professional badge overlay */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-slate-800/80 backdrop-blur-sm border border-slate-700/50 rounded-xl p-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-amber-400/10 rounded-lg">
                        <Scale className="w-5 h-5 text-amber-400" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold text-sm">Dr. Pedro Luis Ricra Llashac</h3>
                        <p className="text-slate-300 text-xs">Director y Socio Fundador</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;