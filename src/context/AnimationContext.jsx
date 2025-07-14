import React, { createContext, useState, useContext, useEffect } from 'react';

const AnimationContext = createContext();

export const useAnimation = () => useContext(AnimationContext);

export const AnimationProvider = ({ children }) => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [animationsEnabled, setAnimationsEnabled] = useState(true);

  useEffect(() => {
    // Check user's motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    
    const handleChange = (e) => {
      setPrefersReducedMotion(e.matches);
      setAnimationsEnabled(!e.matches);
    };
    
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const toggleAnimations = () => {
    setAnimationsEnabled(!animationsEnabled);
  };

  return (
    <AnimationContext.Provider value={{ 
      animationsEnabled, 
      prefersReducedMotion,
      toggleAnimations
    }}>
      {children}
    </AnimationContext.Provider>
  );
};
