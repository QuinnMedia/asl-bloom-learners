
import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  animation?: 'fade-in' | 'fade-in-left' | 'fade-in-right';
  delay?: number;
  threshold?: number;
  duration?: number;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  className,
  animation = 'fade-in',
  delay = 0,
  threshold = 0.2,
  duration = 600,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if user prefers reduced motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    // Listen for changes to motion preference
    const handleMediaChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleMediaChange);
    return () => {
      mediaQuery.removeEventListener('change', handleMediaChange);
    };
  }, []);

  useEffect(() => {
    // If reduced motion is preferred, make content immediately visible
    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold,
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, prefersReducedMotion]);

  const animationClassMap = {
    'fade-in': 'animate-fade-in',
    'fade-in-left': 'animate-fade-in-left',
    'fade-in-right': 'animate-fade-in-right',
  };

  return (
    <div
      ref={ref}
      className={cn(
        // If reduced motion is preferred, always show content without animation
        prefersReducedMotion ? 'opacity-100' : (isVisible ? animationClassMap[animation] : 'opacity-0'),
        className
      )}
      style={{
        animationDelay: prefersReducedMotion ? '0ms' : `${delay}ms`,
        animationDuration: prefersReducedMotion ? '0ms' : `${duration}ms`,
      }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
