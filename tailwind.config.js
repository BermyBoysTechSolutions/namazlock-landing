/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#fdf9ec',
          100: '#fbf0c8',
          200: '#f7de8d',
          300: '#f2c84a',
          400: '#edb025',
          500: '#d4941a',
          600: '#b87213',
          700: '#925314',
          800: '#784217',
          900: '#653717',
          950: '#3a1b09',
        },
        circuit: '#0a0a0a',
        darkgold: '#1a1400',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Playfair Display"', 'serif'],
      },
      backgroundImage: {
        'circuit-pattern': "url('/circuit-bg.svg')",
        'gold-gradient': 'linear-gradient(135deg, #d4941a 0%, #f2c84a 50%, #b87213 100%)',
      },
      animation: {
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 3s linear infinite',
      },
      keyframes: {
        'glow-pulse': {
          '0%, 100%': { 
            boxShadow: '0 0 20px rgba(212,148,26,0.3), 0 0 40px rgba(212,148,26,0.1)' 
          },
          '50%': { 
            boxShadow: '0 0 30px rgba(212,148,26,0.5), 0 0 60px rgba(212,148,26,0.2)' 
          },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-16px)' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
}
