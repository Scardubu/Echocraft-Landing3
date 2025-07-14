import { useEffect, useState } from 'react';

export default function useScrollEffects(ref) {
  const [scrollY, setScrollY] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      if (ref.current) {
        // Parallax effect
        ref.current.querySelectorAll('.parallax-element').forEach((el, i) => {
          const speed = (i + 1) * 0.1;
          el.style.transform = `translateY(${scrollY * speed}px)`;
        });
        
        // Fade-in elements
        ref.current.querySelectorAll('.fade-in').forEach(el => {
          const rect = el.getBoundingClientRect();
          const isVisible = rect.top < window.innerHeight * 0.9;
          if (isVisible) {
            el.classList.add('opacity-100', 'translate-y-0');
            el.classList.remove('opacity-0', 'translate-y-10');
          }
        });
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [ref, scrollY]);
}
