import { motion } from 'framer-motion';

const GradientBorder = ({ 
  children, 
  className = '', 
  borderRadius = 'lg',
  gradientColors = 'from-cyan-500 via-purple-500 to-cyan-500',
  borderWidth = '2',
  padding = '1',
  animated = true,
  ...props 
}) => {
  const borderRadiusClass = {
    'sm': 'rounded-sm',
    'md': 'rounded-md',
    'lg': 'rounded-lg',
    'xl': 'rounded-xl',
    '2xl': 'rounded-2xl',
    'full': 'rounded-full'
  };

  const Component = animated ? motion.div : 'div';
  
  const animationProps = animated ? {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.3 },
    whileHover: { scale: 1.02 },
    whileTap: { scale: 0.98 }
  } : {};

  return (
    <Component
      className={`relative p-${padding} bg-gradient-to-r ${gradientColors} ${borderRadiusClass[borderRadius]} ${className}`}
      {...animationProps}
      {...props}
    >
      {/* Gradient border background */}
      <div className={`absolute inset-0 bg-gradient-to-r ${gradientColors} ${borderRadiusClass[borderRadius]} opacity-75 blur-sm`} />
      
      {/* Content container */}
      <div className={`relative bg-slate-900 ${borderRadiusClass[borderRadius]} overflow-hidden`}>
        {children}
      </div>
      
      {/* Animated border effect */}
      {animated && (
        <div className={`absolute inset-0 ${borderRadiusClass[borderRadius]} opacity-0 hover:opacity-100 transition-opacity duration-300`}>
          <div className={`absolute inset-0 bg-gradient-to-r ${gradientColors} ${borderRadiusClass[borderRadius]} animate-pulse`} />
        </div>
      )}
    </Component>
  );
};

export default GradientBorder;
