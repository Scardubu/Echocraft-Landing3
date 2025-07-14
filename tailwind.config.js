// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      animation: {
        'gradient-pulse': 'gradientPulse 8s ease infinite',
        'float': 'float 6s ease-in-out infinite',
        'neon-pulse': 'neonPulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
      },
      keyframes: {
        gradientPulse: {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' }
        },
        neonPulse: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.7 }
        }
      },
      backgroundImage: {
        'grid-pattern': "url('/src/assets/patterns/grid-pattern.svg')",
        'wave-pattern': "url('/src/assets/patterns/wave-pattern.svg')"
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwindcss-text-fill'),
  ],
};
