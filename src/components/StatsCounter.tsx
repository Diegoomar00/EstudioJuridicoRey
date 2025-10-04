import { useEffect, useState } from 'react';
import { Scale, Gavel, Clock } from 'lucide-react';

const StatsCounter = () => {
  const [counts, setCounts] = useState({ penal: 0, civil: 0, years: 0 });
  const [isVisible, setIsVisible] = useState(false);

  const stats = [
    {
      icon: Gavel,
      target: 350,
      label: 'Casos Penales Exitosos',
      suffix: '+',
      color: 'text-red-500'
    },
    {
      icon: Scale,
      target: 280,
      label: 'Casos Civiles Exitosos',
      suffix: '+',
      color: 'text-blue-500'
    },
    {
      icon: Clock,
      target: 15,
      label: 'Años de Experiencia',
      suffix: '+',
      color: 'text-accent'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('stats-counter');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    stats.forEach((stat, index) => {
      let currentCount = 0;
      const increment = stat.target / steps;

      const timer = setInterval(() => {
        currentCount += increment;
        if (currentCount >= stat.target) {
          currentCount = stat.target;
          clearInterval(timer);
        }

        setCounts(prev => ({
          ...prev,
          [index === 0 ? 'penal' : index === 1 ? 'civil' : 'years']: Math.floor(currentCount)
        }));
      }, stepDuration);
    });
  }, [isVisible]);

  return (
    <section id="stats-counter" className="py-16 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            const currentValue = index === 0 ? counts.penal : index === 1 ? counts.civil : counts.years;
            
            return (
              <div 
                key={index}
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center">
                    <Icon className={`h-8 w-8 ${stat.color}`} />
                  </div>
                </div>
                <div className="text-4xl md:text-5xl font-bold mb-2 text-accent">
                  {currentValue}{stat.suffix}
                </div>
                <p className="text-lg text-primary-foreground/90 font-medium">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsCounter;