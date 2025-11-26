/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        azulBg: '#124A9F',
        azulAgua: '#3BD8FF',
        azulClaroBg: '#c5f4ff',
        branco: '#ffffff',
        azulMarinho: '#01255A',
        azulMarinhoHover: '#02122b',
        whatsapp: '#2AB640',
        cinza: '#6E6E6E',
        preto: '#000000',
      },
      fontFamily: {
        principal: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        personalizado: '0 2px 2px rgba(0, 0, 0, 0.5)',
      },
      backgroundImage: {
        'degrade-azul-claro': 'linear-gradient(0deg, rgba(255, 255, 255, 1) 100%, rgba(1, 212, 255, 0.2) 100%)',
      },
      screens: {
        xs: "480px",
        sm: "640px",
        md: "768px",
        lg: "1080px",
        xl: "1280px",
        "2xl": "1440px",
        ultra: "1800px",
      },
    },
  },
  plugins: [],
};
