import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const FloatingShapes = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const shapes = [
    {
      id: 1,
      type: 'circle',
      size: 'w-32 h-32',
      color: 'bg-gradient-to-br from-cyan-500/20 to-purple-500/20',
      position: 'top-20 left-10',
      animation: {
        y: [0, -30, 0],
        x: [0, 15, 0],
        rotate: [0, 180, 360]
      },
      duration: 20
    },
    {
      id: 2,
      type: 'square',
      size: 'w-24 h-24',
      color: 'bg-gradient-to-br from-purple-500/20 to-cyan-500/20',
      position: 'top-40 right-20',
      animation: {
        y: [0, 25, 0],
        x: [0, -20, 0],
        rotate: [0, -90, 0]
      },
      duration: 15
    },
    {
      id: 3,
      type: 'triangle',
      size: 'w-20 h-20',
      color: 'bg-gradient-to-br from-cyan-400/20 to-purple-400/20',
      position: 'bottom-32 left-20',
      animation: {
        y: [0, -20, 0],
        x: [0, 10, 0],
        rotate: [0, 120, 240, 360]
      },
      duration: 18
    },
    {
      id: 4,
      type: 'hexagon',
      size: 'w-28 h-28',
      color: 'bg-gradient-to-br from-purple-400/20 to-cyan-400/20',
      position: 'bottom-20 right-10',
      animation: {
        y: [0, 20, 0],
        x: [0, -15, 0],
        rotate: [0, 60, 120, 180, 240, 300, 360]
      },
      duration: 25
    },
    {
      id: 5,
      type: 'diamond',
      size: 'w-16 h-16',
      color: 'bg-gradient-to-br from-cyan-300/20 to-purple-300/20',
      position: 'top-1/2 left-1/4',
      animation: {
        y: [0, -15, 0],
        x: [0, 12, 0],
        rotate: [0, 45, 90, 135, 180, 225, 270, 315, 360]
      },
      duration: 12
    }
  ];

  const getShapeClasses = (type) => {
    switch (type) {
      case 'circle':
        return 'rounded-full';
      case 'square':
        return 'rounded-lg';
      case 'triangle':
        return 'rounded-sm transform rotate-45';
      case 'hexagon':
        return 'rounded-lg transform rotate-45';
      case 'diamond':
        return 'rounded-sm transform rotate-45';
      default:
        return 'rounded-full';
    }
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {shapes.map((shape) => (
        <motion.div
          key={shape.id}
          className={`absolute ${shape.size} ${shape.color} ${shape.position} ${getShapeClasses(shape.type)} blur-sm opacity-30`}
          animate={shape.animation}
          transition={{
            duration: shape.duration,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
      
      {/* Additional floating particles */}
      {Array.from({ length: 15 }).map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-2 h-2 bg-cyan-400/40 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -50, 0],
            x: [0, Math.random() * 30 - 15, 0],
            opacity: [0.4, 0.8, 0.4]
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 5
          }}
        />
      ))}
    </div>
  );
};

export default FloatingShapes;
