import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { techStack } from '../../data/techStack';
import { useAnimation } from '../../context/AnimationContext';

const TechStack = () => {
  const [activeTech, setActiveTech] = useState(null);
  const { animationsEnabled } = useAnimation();

  return (
    <section id="tech-stack" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <motion.h2 
          initial={animationsEnabled ? { opacity: 0, y: 20 } : false}
          whileInView={animationsEnabled ? { opacity: 1, y: 0 } : false}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-6 text-gradient"
        >
          Our Tech Arsenal
        </motion.h2>
        <motion.p
          initial={animationsEnabled ? { opacity: 0 } : false}
          whileInView={animationsEnabled ? { opacity: 1 } : false}
          viewport={{ once: true }}
          className="text-xl text-gray-300 max-w-2xl mx-auto"
        >
          Cutting-edge technologies that power your success
        </motion.p>
      </div>
      
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {techStack.map((tech, index) => (
            <motion.div
              key={index}
              initial={animationsEnabled ? { scale: 0.8, opacity: 0 } : false}
              whileInView={animationsEnabled ? { scale: 1, opacity: 1 } : false}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              <div 
                className={`card h-full p-6 cursor-pointer transition-all duration-300 ${
                  activeTech === index ? '!border-cyan-400 !bg-slate-700/70' : ''
                }`}
                onClick={() => setActiveTech(activeTech === index ? null : index)}
                onMouseEnter={() => setActiveTech(index)}
                onMouseLeave={() => setActiveTech(null)}
              >
                <div className="text-4xl mb-4">{tech.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{tech.name}</h3>
                
                {activeTech === index && (
                  <motion.p 
                    initial={animationsEnabled ? { height: 0, opacity: 0 } : false}
                    animate={animationsEnabled ? { height: 'auto', opacity: 1 } : false}
                    className="text-gray-400 text-sm mt-2"
                  >
                    {tech.description}
                  </motion.p>
                )}
              </div>
              
              {activeTech === index && (
                <motion.div 
                  initial={animationsEnabled ? { scale: 0.8, opacity: 0 } : false}
                  animate={animationsEnabled ? { scale: 1, opacity: 1 } : false}
                  className={`absolute -inset-1 bg-gradient-to-r ${tech.color} rounded-2xl blur-lg opacity-20 -z-10`}
                />
              )}
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          initial={animationsEnabled ? { opacity: 0, y: 20 } : false}
          whileInView={animationsEnabled ? { opacity: 1, y: 0 } : false}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-cyan-900/20 to-purple-900/20 border border-cyan-500/20 rounded-2xl p-8"
        >
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-shrink-0">
              <div className="bg-slate-800 rounded-xl p-6 w-24 h-24 flex items-center justify-center mx-auto">
                <div className="text-4xl">🚀</div>
              </div>
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-white mb-4">Future-Proof Architecture</h3>
              <p className="text-gray-300 max-w-2xl">
                We build systems that scale with your business. Our tech stack is continuously updated to leverage the latest advancements in performance, security, and developer experience. From serverless architectures to edge computing, we ensure your infrastructure is ready for tomorrow's challenges.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
