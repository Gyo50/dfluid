/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        exo: ['"Exo2-Regular"', 'sans-serif'],
        'Exo2-Bold' : ['"Exo2-Bold"','sans-serif'],
        montserrat: ['"Montserrat-Regular"', 'sans-serif'],
        'montserrat-bold': ['"Montserrat-Bold"', 'sans-serif'],
      },
      colors: {
        'blue' : '#18a0fb',
        'green' : '#00C300',
        'orange' : '#FF6633',
        'bgcolor' : '#d9d9d9',
        'bordercolor' : '#9999',
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}

