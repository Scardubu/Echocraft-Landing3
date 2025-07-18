import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const ServiceCard = ({ service, isActive, onClick, animationsEnabled }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      animate={{ 
        y: (animationsEnabled && hovered) ? -10 : 0,
        borderColor: isActive ? '#22d3ee' : (hovered ? 'rgba(34, 211, 238, 0.5)' : '#1e293b')
      }}
      className={`bg-slate-800/50 backdrop-blur-sm border rounded-2xl p-6 cursor-pointer transition-all duration-300 overflow-hidden h-full ${
        isActive ? 'ring-2 ring-cyan-400/30' : ''
      }`}
      onClick={onClick}
      role="button"
      tabIndex="0"
      aria-pressed={isActive}
      aria-label={`Learn more about ${service.title}`}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          onClick();
        }
      }}
    >
      <div className="flex flex-col h-full">
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center">
            <motion.div 
              animate={{ scale: (animationsEnabled && hovered) ? 1.1 : 1 }}
              className={`bg-gradient-to-r ${service.color} p-3 rounded-xl mr-4`}
            >
              <service.icon size={24} className="text-white" />
            </motion.div>
            <h3 className="text-xl font-semibold text-white">{service.title}</h3>
          </div>
          
          <motion.button
            whileHover={animationsEnabled ? { scale: 1.05 } : {}}
            whileTap={animationsEnabled ? { scale: 0.95 } : {}}
            className="px-4 py-2 bg-slate-700 rounded-full text-sm text-gray-300 hover:bg-slate-600 transition-colors"
            aria-label={`View ${service.demo}`}
          >
            {service.demo}
          </motion.button>
        </div>
        
        <p className="text-gray-300 mb-6 leading-relaxed flex-grow">{service.description}</p>
        
        <div className="grid grid-cols-2 gap-3">
          {service.features.map((f, j) => (
            <div key={j} className="flex items-center gap-2">
              <CheckCircle size={16} className="text-cyan-400 flex-shrink-0" />
              <span className="text-gray-300 text-sm">{f}</span>
            </div>
          ))}
        </div>
        
        <motion.div 
          className={`mt-4 h-1 bg-gradient-to-r ${service.color} rounded-full`}
          animate={{ 
            scaleX: (animationsEnabled && (isActive || hovered)) ? 1 : 0,
            transformOrigin: 'left'
          }}
          transition={{ duration: 0.5 }}
        />
      </div>
    </motion.div>
  );
};

export default ServiceCard;