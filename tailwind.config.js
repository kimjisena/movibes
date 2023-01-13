/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: '#191919',
        white: '#E8E8E8',
        darkgray: '#212121',
        lightgray: '#666666',
        primary: '#3DD2CC',
        gold: '#FFD700',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      fontWeight: {
        regular: '400',
        semibold: '500',
        bold: '600',
      },
      fontSize: {
        sm12: ['12px', '18px'],
        sm13: ['13px', '19.5px'],
        sm14: ['14px', '21px'],
        sm15: ['15px', '22.5px'],
        md18: ['18px', '25.5px'],
        md20: ['20px', '30px'],
        md23: ['23px', '34.5px'],
        md25: ['25px', '37.5px'],

      }
    },
  },
  plugins: [],
}