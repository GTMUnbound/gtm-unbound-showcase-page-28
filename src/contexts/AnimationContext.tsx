
import React, { createContext, useContext, useState, useEffect } from 'react';

type AnimationContextType = {
  isReduced: boolean;
  prefersReducedMotion: boolean;
  hasScrolled: boolean;
  scrollYProgress: number;
  isMobile: boolean;
};

const AnimationContext = createContext<AnimationContextType>({
  isReduced: false,
  prefersReducedMotion: false,
  hasScrolled: false,
  scrollYProgress: 0,
  isMobile: false,
});

export const AnimationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isReduced, setIsReduced] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [scrollYProgress, setScrollYProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    setIsReduced(mediaQuery.matches);

    const handleChange = () => {
      setPrefersReducedMotion(mediaQuery.matches);
      setIsReduced(mediaQuery.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Check for mobile devices
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.offsetHeight - window.innerHeight;
      const scrollPercent = scrollTop / docHeight;
      
      setScrollYProgress(scrollPercent);
      
      if (scrollTop > 50 && !hasScrolled) {
        setHasScrolled(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasScrolled]);

  return (
    <AnimationContext.Provider
      value={{
        isReduced,
        prefersReducedMotion,
        hasScrolled,
        scrollYProgress,
        isMobile
      }}
    >
      {children}
    </AnimationContext.Provider>
  );
};

export const useAnimation = () => useContext(AnimationContext);

export default AnimationContext;
