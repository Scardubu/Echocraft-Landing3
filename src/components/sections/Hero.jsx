// src/components/sections/Hero.jsx
import { useRef } from 'react';
import { motion } from 'framer-motion';
import TypingEffect from '../ui/TypingEffect';
import useScrollEffects from '../../hooks/useScrollEffects';
import GradientBorder from '../ui/GradientBorder';

const Hero = () => {
  const heroRef = useRef(null);
  useScrollEffects(heroRef);

  return (
    <section ref={heroRef} className="relative pt-32 pb-20 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
          >
            <span className="bg-gradient-to-r from-white via-cyan-100 to-purple-100 bg-clip-text text-transparent">
              Crafting
            </span>
            <br />
            <TypingEffect
              text="Intelligent Systems"
              className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
              delay={500}
            />
          </motion.h1>
          
          {/* Animated CTA buttons with gradient borders */}
          <GradientBorder borderRadius="full">
            <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 px-8 py-4 rounded-full text-white font-semibold text-lg">
              Get Your Free Technical Audit
            </button>
          </GradientBorder>
        </div>
        
        {/* 3D Animated Tech Sphere */}
        <div className="relative w-80 h-80 mx-auto">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-full blur-xl animate-pulse" />
          <div className="relative w-full h-full sphere-animation">
            {/* Sphere implementation using Three.js would go here */}
          </div>
        </div>
      </div>
      
      {/* Animated scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-2 h-10 bg-gradient-to-b from-cyan-400 to-purple-400 rounded-full" />
      </div>
    </section>
  );
};
