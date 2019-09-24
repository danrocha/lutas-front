const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        logo: ['Pathway Gothic One', 'Lato'],
        serif: ['Cardo', ...defaultTheme.fontFamily.serif],
        sans: ['Lato', ...defaultTheme.fontFamily.sans]
      }
    }
  },
  variants: {},
  plugins: []
}
