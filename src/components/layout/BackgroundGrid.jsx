import { motion } from 'framer-motion';

const BackgroundGrid = ({ 
  className = '', 
  gridSize = 50,
  opacity = 0.1,
  color = 'cyan',
  animated = true 
}) => {
  const colorClasses = {
    cyan: 'border-cyan-500/20',
    purple: 'border-purple-500/20',
    blue: 'border-blue-500/20',
    white: 'border-white/20'
  };

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      {/* Animated grid pattern */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: animated ? opacity : opacity }}
        transition={{ duration: 2 }}
      >
        {/* Vertical lines */}
        <div className="absolute inset-0">
          {Array.from({ length: Math.ceil(100 / (gridSize / 10)) }).map((_, i) => (
            <motion.div
              key={`vertical-${i}`}
              className={`absolute top-0 bottom-0 border-l ${colorClasses[color]}`}
              style={{ left: `${i * (gridSize / 10)}%` }}
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ 
                duration: 1.5, 
                delay: animated ? i * 0.1 : 0,
                ease: "easeOut"
              }}
            />
          ))}
        </div>

        {/* Horizontal lines */}
        <div className="absolute inset-0">
          {Array.from({ length: Math.ceil(100 / (gridSize / 10)) }).map((_, i) => (
            <motion.div
              key={`horizontal-${i}`}
              className={`absolute left-0 right-0 border-t ${colorClasses[color]}`}
              style={{ top: `${i * (gridSize / 10)}%` }}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ 
                duration: 1.5, 
                delay: animated ? i * 0.1 : 0,
                ease: "easeOut"
              }}
            />
          ))}
        </div>

        {/* Grid intersection points */}
        {animated && (
          <div className="absolute inset-0">
            {Array.from({ length: 10 }).map((_, i) => (
              <motion.div
                key={`dot-${i}`}
                className={`absolute w-2 h-2 bg-${color}-500/30 rounded-full`}
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.5,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>
        )}
      </motion.div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-slate-900/50 to-transparent" />
    </div>
  );
};

export default BackgroundGrid;
