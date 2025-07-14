import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useAnimation } from '../../context/AnimationContext';
import { useViewportTracking } from '../../hooks/useViewportTracking';

const AnimatedCounter = ({ value, duration = 2, suffix = '', label, delay = 0 }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);
  const { animationsEnabled } = useAnimation();
  
  useViewportTracking(ref, (visible) => {
    if (visible && !isVisible) {
      setIsVisible(true);
    }
  });

  useEffect(() => {
    if (!isVisible || !animationsEnabled) return;
    
    let start = 0;
    const increment = value / (duration * 60); // 60fps
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.ceil(start));
      }
    }, 1000 / 60);
    
    return () => clearInterval(timer);
  }, [isVisible, value, duration, animationsEnabled]);

  return (
    <div ref={ref} className="text-center">
      <motion.div 
        initial={animationsEnabled ? { scale: 0.8, opacity: 0 } : false}
        animate={isVisible && animationsEnabled ? { scale: 1, opacity: 1 } : false}
        transition={{ delay, duration: 0.5 }}
        className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2"
      >
        {animationsEnabled ? count : value}{suffix}
      </motion.div>
      <div className="text-gray-400 uppercase text-sm tracking-wider">{label}</div>
    </div>
  );
};

export default AnimatedCounter;
