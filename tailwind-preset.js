const colors = require('tailwindcss/colors');

module.exports = {
  theme: {
    colors: {
      ...colors,
      lime: {
        DEFAULT: '#8EEEAA',
      },
      charcoal: {
        DEFAULT: '#08090a',
      },
      ghost: {
        DEFAULT: '#edf0f1',
      },
      gray: {
        darkest: '#1f2d3d',
        dark: '#3c4858',
        DEFAULT: '#c0ccda',
        light: '#e0e6ed',
        lightest: '#f9fafc',
      },
    },
    fontFamily: {
      ui: ['system-ui', 'Segoe UI'],
    },
    extend: {},
  },
  plugins: [],
};
