// src/hooks/useViewportTracking.js
import { useState, useEffect } from 'react';

export default function useViewportTracking(sectionId) {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const section = document.getElementById(sectionId);
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, [sectionId]);

  return isInView;
}
