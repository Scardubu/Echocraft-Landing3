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
    <section ref={heroRef} className="relative pt-32 pb-20 min-h-screen flex items-center section-padding">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
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
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed"
            >
              Transform your business with AI-powered analytics, blockchain integration, and automated workflows that scale with your ambitions.
            </motion.p>
            
            {/* Action buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <GradientBorder borderRadius="full" className="flex-1">
                <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 px-8 py-4 rounded-full text-white font-semibold text-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105">
                  Get Your Free Technical Audit
                </button>
              </GradientBorder>
              <button className="btn-secondary flex-1">
                View Case Studies
              </button>
            </motion.div>
            
            {/* Trust indicators */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex items-center gap-6 text-sm text-gray-400"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span>150+ Projects Delivered</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse" />
                <span>98% Client Satisfaction</span>
              </div>
            </motion.div>
          </div>
          
          {/* 3D Animated Tech Sphere */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="relative w-80 h-80 mx-auto"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-full blur-xl animate-pulse" />
            <div className="relative w-full h-full sphere-animation">
              {/* Placeholder for Three.js sphere */}
              <div className="w-full h-full bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full border border-cyan-500/30 flex items-center justify-center">
                <div className="w-32 h-32 bg-gradient-to-br from-cyan-400 to-purple-400 rounded-full animate-float opacity-80" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Animated scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-2 h-10 bg-gradient-to-b from-cyan-400 to-purple-400 rounded-full" />
      </div>
    </section>
  );
};

export default Hero;
