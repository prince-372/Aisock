/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'darkblue': '#020416',
      'lightblue': '#6E5DF6',
      'lightgray':'#D2D1D9',
      'lightgray1':'#E2DEFE',
      'skyblue':'#232851',
      'white':'#FFFFFF',
      'numberBorder': '1.65px solid #6E5DF6',
    },
    extend: {
      backgroundImage:{
     "commangradiunt" :"linear-gradient(180deg, #9B77E8 0%, #6854FF 100%);",
     "blackgradiunt": " linear-gradient(112.83deg, #0A0C1C 0%, #080919 110.84%);",
      },
      fontFamily: {
        Opensans: "Open Sans ,sans-serif",
        Roboto: "Roboto ,sans-serif",
      },
    },
  },
  plugins: [],
}