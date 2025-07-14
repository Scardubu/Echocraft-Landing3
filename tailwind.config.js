module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#ecfeff',
          100: '#cffafe',
          200: '#a5f3fc',
          300: '#67e8f9',
          400: '#22d3ee',
          500: '#06b6d4',
          600: '#0891b2',
          700: '#0e7490',
          800: '#155e75',
          900: '#164e63',
        },
        secondary: {
          50: '#f5f3ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
          700: '#6d28d9',
          800: '#5b21b6',
          900: '#4c1d95',
        },
        dark: {
          50: '#f1f5f9',
          100: '#e2e8f0',
          200: '#cbd5e1',
          300: '#94a3b8',
          400: '#64748b',
          500: '#475569',
          600: '#334155',
          700: '#1e293b',
          800: '#0f172a',
          900: '#020617',
        }
      },
      animation: {
        'pulse-slow': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 3s infinite',
        'float': 'hologram-float 8s ease-in-out infinite',
        'gradient-pulse': 'gradientPulse 8s ease infinite',
        'neon-pulse': 'neonPulse 3s ease-in-out infinite'
      },
      keyframes: {
        hologram-float: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '25%': { transform: 'translateY(-10px) rotate(2deg)' },
          '50%': { transform: 'translateY(0) rotate(0deg)' },
          '75%': { transform: 'translateY(10px) rotate(-2deg)' }
        },
        gradientPulse: {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' }
        },
        neonPulse: {
          '0%, 100%': { 
            'text-shadow': '0 0 10px rgba(56, 189, 248, 0.7), 0 0 20px rgba(139, 92, 246, 0.5)' 
          },
          '50%': { 
            'text-shadow': '0 0 15px rgba(56, 189, 248, 1), 0 0 30px rgba(139, 92, 246, 0.8)' 
          }
        }
      },
      boxShadow: {
        'glow-cyan': '0 0 20px rgba(56, 189, 248, 0.3)',
        'glow-purple': '0 0 20px rgba(139, 92, 246, 0.3)'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('tailwindcss-text-fill'),
  ],
};
