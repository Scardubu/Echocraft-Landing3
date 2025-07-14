import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { testimonials } from '../../data/testimonials';
import { useAnimation } from '../../context/AnimationContext';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [direction, setDirection] = useState(1);
  const { animationsEnabled } = useAnimation();

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
    }, 8000);
    
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const navigateTestimonial = (index) => {
    setDirection(index > currentTestimonial ? 1 : -1);
    setCurrentTestimonial(index);
  };

  const testimonialVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      x: direction > 0 ? -100 : 100,
      opacity: 0
    })
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <motion.h2 
          initial={animationsEnabled ? { opacity: 0, y: 20 } : false}
          whileInView={animationsEnabled ? { opacity: 1, y: 0 } : false}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
        >
          Client Success Stories
        </motion.h2>
        <motion.p
          initial={animationsEnabled ? { opacity: 0 } : false}
          whileInView={animationsEnabled ? { opacity: 1 } : false}
          viewport={{ once: true }}
          className="text-xl text-gray-300 max-w-2xl mx-auto"
        >
          See how we've transformed businesses across industries
        </motion.p>
      </div>
      
      <div className="max-w-4xl mx-auto relative h-[400px] overflow-hidden">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            custom={direction}
            variants={animationsEnabled ? testimonialVariants : false}
            initial="enter"
            animate={currentTestimonial === index ? "center" : "exit"}
            transition={{ duration: 0.6 }}
            className={`absolute inset-0 ${currentTestimonial === index ? 'pointer-events-auto' : 'pointer-events-none'}`}
          >
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-3xl p-8 md:p-12 h-full flex flex-col">
              <div className="flex-grow">
                <div className="flex justify-center mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <div key={i} className="text-yellow-400 text-2xl mx-1">★</div>
                  ))}
                </div>
                
                <blockquote className="text-xl md:text-2xl text-gray-300 text-center mb-8 leading-relaxed italic">
                  "{testimonial.quote}"
                </blockquote>
                
                <p className="text-cyan-400 font-semibold text-center text-lg">
                  {testimonial.author}
                </p>
                <p className="text-gray-500 text-center mb-8">
                  {testimonial.role}
                </p>
              </div>
              
              <div className="flex justify-center flex-wrap gap-4 mt-auto">
                {testimonial.results.map((result, i) => (
                  <div key={i} className="bg-slate-700/50 px-4 py-2 rounded-lg flex items-center gap-2">
                    <span className="text-2xl">{result.icon}</span>
                    <div>
                      <div className="font-bold text-cyan-400">{result.value}</div>
                      <div className="text-gray-400 text-sm">{result.metric}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className="flex justify-center mt-8 space-x-2">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => navigateTestimonial(i)}
            className={`w-3 h-3 rounded-full transition-transform ${
              i === currentTestimonial 
                ? 'bg-cyan-400 scale-125' 
                : 'bg-slate-600 hover:bg-slate-500'
            }`}
            aria-label={`View testimonial ${i+1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
