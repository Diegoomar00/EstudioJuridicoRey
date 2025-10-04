import { useEffect, useState } from 'react';

interface UseCounterAnimationOptions {
  target: number;
  duration?: number;
  startOnVisible?: boolean;
}

export const useCounterAnimation = (
  options: UseCounterAnimationOptions
) => {
  const { target, duration = 2000, startOnVisible = true } = options;
  const [count, setCount] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const startAnimation = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setCount(0);
    
    const steps = 60;
    const stepDuration = duration / steps;
    const increment = target / steps;
    let currentCount = 0;

    const timer = setInterval(() => {
      currentCount += increment;
      
      if (currentCount >= target) {
        currentCount = target;
        setCount(target);
        setIsAnimating(false);
        clearInterval(timer);
      } else {
        setCount(Math.floor(currentCount));
      }
    }, stepDuration);

    return () => clearInterval(timer);
  };

  useEffect(() => {
    if (!startOnVisible) {
      startAnimation();
    }
  }, [target, duration, startOnVisible]);

  return { count, startAnimation, isAnimating };
};