import React from 'react';
import { motion } from 'framer-motion';
import { useAnimation } from '../../context/AnimationContext';
import AnimatedCounter from '../ui/AnimatedCounter';

const CTA = () => {
  const { animationsEnabled } = useAnimation();

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/20 to-purple-900/20 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={animationsEnabled ? { opacity: 0, x: -50 } : false}
            whileInView={animationsEnabled ? { opacity: 1, x: 0 } : false}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Ready to Transform Your Tech?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join 250+ forward-thinking companies that have automated their workflows and scaled their infrastructure with Echocraft.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-500 px-8 py-4 rounded-full text-white font-semibold hover:from-cyan-600 hover:to-purple-600 transition-transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25">
                Get Your Free Technical Audit
              </button>
              <button className="border-2 border-cyan-400 px-8 py-4 rounded-full text-cyan-400 font-semibold hover:bg-cyan-400 hover:text-white transition-colors">
                Schedule a Demo
              </button>
            </div>
          </motion.div>
          
          <motion.div
            initial={animationsEnabled ? { opacity: 0, x: 50 } : false}
            whileInView={animationsEnabled ? { opacity: 1, x: 0 } : false}
            viewport={{ once: true }}
            className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8"
          >
            <h3 className="text-xl font-semibold text-white mb-6 text-center">
              Our Impact in Numbers
            </h3>
            <div className="grid grid-cols-2 gap-8">
              <AnimatedCounter value={98} suffix="%" label="Client Satisfaction" delay={0.2} />
              <AnimatedCounter value={42} suffix="%" label="Faster Deployment" delay={0.4} />
              <AnimatedCounter value={73} suffix="%" label="Cost Reduction" delay={0.6} />
              <AnimatedCounter value={250} suffix="+" label="Happy Clients" delay={0.8} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
