const colors = require('tailwindcss/colors');

module.exports = {
  theme: {
    colors: {
      ...colors,
      navy: {
        dark: '#4b5563',
        medium: '#39A2DB',
        light: '#A2DBFA',
      },
      apple: {
        DEFAULT: '#ff3e3e',
      },
      charcoal: {
        DEFAULT: '#08090a',
      },
      ghost: {
        DEFAULT: '#edf0f1',
      },
    },
    fontFamily: {
      ui: ['system-ui', 'Segoe UI'],
    },
    minHeight: {
      '1': '100px',
    },
    extend: {},
  },
  plugins: [],
};
