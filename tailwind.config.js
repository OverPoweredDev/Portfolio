/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', 
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#222121',
          text: '#e1e1e1',
          accent: '#e1e1e1',
          terminal: '#505050',
        },
        light: {
          bg: '#ffffff',
          text: '#000000',
          accent: '#a1a1a1',
          terminal: '#404040',
        },
      },
      keyframes: {
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-0.25rem)' },
          '50%': { opacity: '1' },
          '100%': { opacity: '0', transform: 'translateY(0.25rem)' },
        },
      },
      animation: {
        fadeInDown: 'fadeInDown 1.2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};