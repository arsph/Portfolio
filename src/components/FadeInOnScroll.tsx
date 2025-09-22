"use client";

import { ReactNode } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';

interface FadeInOnScrollProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade';
  threshold?: number;
  triggerOnce?: boolean;
}

export function FadeInOnScroll({
  children,
  className,
  delay = 0,
  direction = 'up',
  threshold = 0.1,
  triggerOnce = true,
}: FadeInOnScrollProps) {
  const { elementRef, isVisible } = useScrollAnimation({
    threshold,
    triggerOnce,
    delay,
  });

  const getTransformClasses = () => {
    if (!isVisible) {
      switch (direction) {
        case 'up':
          return 'translate-y-8 opacity-0';
        case 'down':
          return '-translate-y-8 opacity-0';
        case 'left':
          return 'translate-x-8 opacity-0';
        case 'right':
          return '-translate-x-8 opacity-0';
        case 'fade':
        default:
          return 'opacity-0';
      }
    }
    return 'translate-y-0 translate-x-0 opacity-100';
  };

  return (
    <div
      ref={elementRef}
      className={cn(
        'transition-all duration-1500 ease-out',
        getTransformClasses(),
        className
      )}
    >
      {children}
    </div>
  );
}
