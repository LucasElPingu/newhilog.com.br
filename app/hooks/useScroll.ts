import { useCallback, useEffect, useState } from 'react';

/**
 * Posição de scroll da página
 */
interface ScrollPosition {
  readonly x: number;
  readonly y: number;
}

/**
 * Hook para rastrear posição de scroll
 * @returns Objeto com coordenadas x e y de scroll
 */
export function useScroll(): ScrollPosition {
  const [scrollPosition, setScrollPosition] = useState<ScrollPosition>({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition({
        x: window.scrollX,
        y: window.scrollY,
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return scrollPosition;
}

/**
 * Hook para detectar quando usuário chegou no fim da página
 * @param offset - Distância em pixels do fim (padrão: 0)
 * @returns true se próximo ao fim da página
 */
export function useScrollAtBottom(offset: number = 0): boolean {
  const [isAtBottom, setIsAtBottom] = useState(false);

  const handleScroll = useCallback(() => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight;
    const winHeight = window.innerHeight;

    setIsAtBottom(scrollTop + winHeight >= docHeight - offset);
  }, [offset]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return isAtBottom;
}
