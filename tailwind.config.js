const { colors: defaultColors } = require('tailwindcss/defaultTheme')

const colors = {
    ...defaultColors,
    ...{
        primary:{ '500': '#0096c7'},
        secondary: { '500': '#0096c7'}
    },
}

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: colors
    
  },
  variants: {
    extend: {},
  },
  plugins: [],
}