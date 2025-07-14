import React, { createContext, useState, useEffect, useContext } from 'react';

const AnimationContext = createContext();

export const useAnimation = () => useContext(AnimationContext);

export const AnimationProvider = ({ children }) => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [animationsEnabled, setAnimationsEnabled] = useState(true);

  // Initialize based on user preference and localStorage
  useEffect(() => {
    // Check system preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    
    // Check user override in localStorage
    const storedPreference = localStorage.getItem('animationsEnabled');
    if (storedPreference !== null) {
      setAnimationsEnabled(storedPreference === 'true');
    } else {
      setAnimationsEnabled(!mediaQuery.matches);
    }
    
    const handleSystemChange = (e) => {
      setPrefersReducedMotion(e.matches);
      if (localStorage.getItem('animationsEnabled') === null) {
        setAnimationsEnabled(!e.matches);
      }
    };
    
    mediaQuery.addEventListener('change', handleSystemChange);
    return () => mediaQuery.removeEventListener('change', handleSystemChange);
  }, []);

  const toggleAnimations = () => {
    const newValue = !animationsEnabled;
    setAnimationsEnabled(newValue);
    localStorage.setItem('animationsEnabled', newValue.toString());
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
