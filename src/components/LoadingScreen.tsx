import { useEffect, useState } from 'react';
import { Scale } from 'lucide-react';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen = ({ onLoadingComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onLoadingComplete, 300);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(timer);
  }, [onLoadingComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-background flex flex-col items-center justify-center">
      {/* Logo and title */}
      <div className="flex flex-col items-center mb-12 animate-fade-in">
        <div className="p-4 rounded-2xl bg-primary mb-6 animate-scale-in">
          <Scale className="h-12 w-12 text-primary-foreground" />
        </div>
        <h1 className="text-3xl font-bold text-primary mb-2">ESTUDIO JURÍDICO REY</h1>
        <p className="text-muted-foreground">Defensa Legal con Excelencia</p>
      </div>

      {/* Progress bar */}
      <div className="w-80 max-w-md">
        <div className="h-1 bg-secondary rounded-full overflow-hidden">
          <div 
            className="h-full gold-gradient transition-all duration-100 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="text-center text-sm text-muted-foreground mt-4">
          Cargando... {progress}%
        </p>
      </div>

      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-accent/30 rounded-full animate-float"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + (i % 2) * 40}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + i * 0.5}s`
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default LoadingScreen;