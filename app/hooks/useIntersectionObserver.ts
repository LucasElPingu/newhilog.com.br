import { useEffect, useRef, useState } from 'react';

/**
 * Opções para useIntersectionObserver
 */
interface UseIntersectionObserverOptions {
  /**
   * Percentual de visibilidade para trigger (0-1) ou array de valores
   */
  readonly threshold?: number | number[];
  /**
   * Margem ao redor do elemento root (em pixels ou porcentagem)
   */
  readonly rootMargin?: string;
  /**
   * Se true, dispara apenas uma vez e depois para de observar
   */
  readonly triggerOnce?: boolean;
}

/**
 * Retorno do hook useIntersectionObserver
 */
interface UseIntersectionObserverReturn {
  readonly ref: React.RefObject<HTMLElement>;
  readonly isVisible: boolean;
  readonly hasBeenVisible: boolean;
}

/**
 * Hook moderno para observar interseção de elementos
 * @param options - Opções do Intersection Observer API
 * @returns Ref, isVisible e hasBeenVisible
 */
export function useIntersectionObserver(
  options: UseIntersectionObserverOptions = {}
): UseIntersectionObserverReturn {
  const {
    threshold = 0.1,
    rootMargin = '0px',
    triggerOnce = true,
  } = options;

  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasBeenVisible, setHasBeenVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            setHasBeenVisible(true);

            if (triggerOnce) {
              observer.unobserve(element);
            }
          } else if (!triggerOnce) {
            setIsVisible(false);
          }
        });
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, triggerOnce]);

  return { ref: ref as React.RefObject<HTMLElement>, isVisible, hasBeenVisible };
}
