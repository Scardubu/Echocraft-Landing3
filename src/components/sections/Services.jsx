import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { services } from '../../data/services';
import ServiceCard from '../ui/ServiceCard';
import { useAnimation } from '../../context/AnimationContext';

const Services = () => {
  const [activeService, setActiveService] = useState(0);
  const { animationsEnabled } = useAnimation();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 }
  };

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <motion.h2 
          initial={animationsEnabled ? { opacity: 0, y: 20 } : false}
          whileInView={animationsEnabled ? { opacity: 1, y: 0 } : false}
          viewport={{ once: true, margin: "-100px" }}
          className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
        >
          Our Signature Services
        </motion.h2>
        <motion.p
          initial={animationsEnabled ? { opacity: 0 } : false}
          whileInView={animationsEnabled ? { opacity: 1 } : false}
          viewport={{ once: true }}
          className="text-xl text-gray-300 max-w-2xl mx-auto"
        >
          Comprehensive solutions for modern digital challenges
        </motion.p>
      </div>
      
      <motion.div 
        variants={animationsEnabled ? container : false}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto"
      >
        {services.map((service, index) => (
          <motion.div 
            key={index} 
            variants={animationsEnabled ? item : false}
            className="h-full"
          >
            <ServiceCard 
              service={service} 
              isActive={activeService === index}
              onClick={() => setActiveService(index)}
              animationsEnabled={animationsEnabled}
            />
          </motion.div>
        ))}
      </motion.div>
      
      <div className="mt-16 max-w-4xl mx-auto bg-gradient-to-r from-cyan-900/20 to-purple-900/20 p-6 rounded-2xl border border-cyan-500/20">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="flex-shrink-0">
            <div className="bg-slate-800 p-4 rounded-xl w-16 h-16 flex items-center justify-center">
              <div className="text-3xl">💡</div>
            </div>
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-white mb-2">Why Choose Echocraft?</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "24/7 Technical Support",
                "30-Day Money-Back Guarantee",
                "Industry-Specific Solutions",
                "Dedicated Success Manager"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-gray-300">
                  <CheckCircle className="text-cyan-400 flex-shrink-0 mt-1" size={16} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;