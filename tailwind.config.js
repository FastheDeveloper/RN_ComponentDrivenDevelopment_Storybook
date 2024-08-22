/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}', './app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        APP_COLOR: {
          MAIN_GREEN: '#209B24',
          MAIN_GREY_TEXT: '#838282',
          MAIN_GREY: '#A3AAB0',
          MAIN_WHITE: '#E0E0E0',
          ACCENT_GREEN: '#4CAF50',
        },
      },
    },
  },
  plugins: [],
}
