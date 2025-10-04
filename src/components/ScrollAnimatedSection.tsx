import React from 'react';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';

interface ScrollAnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  animationType?: 'fadeInUp' | 'fadeInLeft' | 'fadeInRight' | 'scaleIn';
  delay?: number;
  threshold?: number;
}

const ScrollAnimatedSection: React.FC<ScrollAnimatedSectionProps> = ({
  children,
  className = '',
  animationType = 'fadeInUp',
  delay = 0,
  threshold = 0.1
}) => {
  const { elementRef, isIntersecting } = useIntersectionObserver({
    threshold,
    triggerOnce: true
  });

  const animationClass = `animate-${animationType.replace(/([A-Z])/g, '-$1').toLowerCase()}`;

  return (
    <div
      ref={elementRef}
      className={`scroll-animate ${isIntersecting ? 'animate' : ''} ${className}`}
      style={{
        animationDelay: isIntersecting ? `${delay}ms` : '0ms',
        ...(isIntersecting && { animation: `${animationType} 0.6s ease-out forwards` })
      }}
    >
      {children}
    </div>
  );
};

export default ScrollAnimatedSection;