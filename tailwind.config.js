/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: 'class', // Or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        brand: {
          100: '#c542f5',
          200: '#9e35c4',
          300: '#6d2487',
          400: '#331040',
        }
      }
    },
  },
  plugins: [],
}
