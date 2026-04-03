/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        surface: {
          DEFAULT: '#0e1321', // surface
          low: '#161b2a',    // surface-container-low
          high: '#252a39',   // surface-container-high
          highest: '#303444', // surface-container-highest
          lowest: '#090e1c',  // surface-container-lowest
        },
        primary: {
          DEFAULT: '#47d6ff', // primary/cyan
          glow: 'rgba(71, 214, 255, 0.3)',
        },
        secondary: '#b6c4ff',
        tertiary: '#adc6ff',
        accent: '#00d2ff',
        dark: {
          900: '#0e1321', // Aligning dark-900 with surface
          800: '#161b2a',
          700: '#252a39',
        }
      },
      fontFamily: {
        sans: ['Manrope', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['Inter', 'monospace'],
      },
      borderRadius: {
        '2xl': '24px',
        '3xl': '32px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'glass-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.01))',
      },
      boxShadow: {
        'glow-primary': '0 0 20px rgba(71, 214, 255, 0.2)',
        'glow-primary-lg': '0 0 40px rgba(71, 214, 255, 0.3)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [],
}
