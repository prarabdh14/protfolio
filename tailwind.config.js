/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        'star-float': {
          '0%': { transform: 'translate(0px, 0px)' },
          '20%': { transform: 'translate(20px, 20px)' },
          '40%': { transform: 'translate(-20px, 40px)' },
          '60%': { transform: 'translate(-30px, -20px)' },
          '80%': { transform: 'translate(20px, -30px)' },
          '100%': { transform: 'translate(0px, 0px)' }
        },
        'star-float-reverse': {
          '0%': { transform: 'translate(0px, 0px)' },
          '20%': { transform: 'translate(-20px, -20px)' },
          '40%': { transform: 'translate(20px, -40px)' },
          '60%': { transform: 'translate(30px, 20px)' },
          '80%': { transform: 'translate(-20px, 30px)' },
          '100%': { transform: 'translate(0px, 0px)' }
        },
        'star-float-vertical': {
          '0%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(30px)' },
          '100%': { transform: 'translateY(0px)' }
        }
      },
      animation: {
        'float': 'star-float 15s ease-in-out infinite',
        'float-reverse': 'star-float-reverse 20s ease-in-out infinite',
        'float-vertical': 'star-float-vertical 12s ease-in-out infinite'
      }
    },
  },
  plugins: [],
};
