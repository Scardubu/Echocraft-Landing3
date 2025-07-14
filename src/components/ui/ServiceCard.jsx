// src/components/ui/ServiceCard.jsx
import { motion } from 'framer-motion';
import { useHover } from '@use-gesture/react';

const ServiceCard = ({ service, isActive }) => {
  const [hovered, setHovered] = useState(false);
  
  const bindHover = useHover(({ active }) => {
    setHovered(active);
  });

  return (
    <motion.div
      {...bindHover()}
      animate={{ 
        y: hovered ? -10 : 0,
        borderColor: isActive ? '#22d3ee' : (hovered ? 'rgba(34, 211, 238, 0.5)' : '#1e293b')
      }}
      className="bg-slate-800/50 backdrop-blur-sm border rounded-2xl p-8 cursor-pointer"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <motion.div 
            animate={{ scale: hovered ? 1.1 : 1 }}
            className={`bg-gradient-to-r ${service.color} p-3 rounded-xl mr-4`}
          >
            <service.icon size={24} className="text-white" />
          </motion.div>
          <h3 className="text-xl font-semibold text-white">{service.title}</h3>
        </div>
        
        {/* Interactive demo button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-4 py-2 bg-slate-700 rounded-full text-sm text-gray-300"
        >
          {service.demo}
        </motion.button>
      </div>
      
      {/* Hover-activated feature glow */}
      {hovered && (
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-2xl -z-10" />
      )}
    </motion.div>
  );
};
