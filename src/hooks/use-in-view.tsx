
import { useState, useEffect, RefObject } from 'react';

interface UseInViewOptions {
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
}

export function useInView(
  ref: RefObject<Element>,
  options: UseInViewOptions = {}
): boolean {
  const { threshold = 0, rootMargin = '0px', once = false } = options;
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const inView = entry.isIntersecting;
        setIsInView(inView);
        
        // If it should only trigger once and it's in view, unobserve
        if (inView && once) {
          observer.unobserve(element);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [ref, threshold, rootMargin, once]);

  return isInView;
}
