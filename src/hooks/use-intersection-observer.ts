
import { useState, useEffect, useRef, RefObject } from 'react';

interface UseIntersectionObserverProps {
  threshold?: number;
  root?: Element | null;
  rootMargin?: string;
  freezeOnceVisible?: boolean;
}

export function useIntersectionObserver({
  threshold = 0.1,
  root = null,
  rootMargin = '0%',
  freezeOnceVisible = true,
}: UseIntersectionObserverProps = {}): [RefObject<HTMLElement>, boolean] {
  const ref = useRef<HTMLElement>(null);
  const [isIntersecting, setIsIntersecting] = useState<boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        const isElementIntersecting = entry.isIntersecting;
        
        if (isElementIntersecting || !freezeOnceVisible) {
          setIsIntersecting(isElementIntersecting);
        }
        
        if (isElementIntersecting && freezeOnceVisible) {
          observer.disconnect();
        }
      },
      {
        threshold,
        root,
        rootMargin,
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.disconnect();
      }
    };
  }, [threshold, root, rootMargin, freezeOnceVisible]);

  return [ref, isIntersecting];
}
