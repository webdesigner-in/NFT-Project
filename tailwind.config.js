/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        Inria:'Inria',
        Jost : 'Jost'
      },
      screens:{
        'sm':'400px',	
        'md':'620px',		
        'lg':'740px',
        'xl':'880px',
        '2xl':'1040px',
        '3xl':'1240px'
      }
    },
  },
  plugins: [],
}