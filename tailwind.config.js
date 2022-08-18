module.exports = {
  presets: [
    require('./tailwind-preset.js'),
  ],
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      'xs': '300px',
      'sm': '500px',
      'md': [
        // Sidebar appears at 768px, so revert to `sm:` styles between 768px
        // and 868px, after which the main content area is wide enough again to
        // apply the `md:` styles.
        { 'min': '668px', 'max': '767px' },
        { 'min': '868px' },
      ],
      'lg': '1100px',
      'xl': '1400px',
    },
  },
  variants: { // all the following default to ['responsive']
    textIndent: ['responsive'],
    textShadow: ['responsive'],
    textDecorationStyle: ['responsive'],
    textDecorationColor: ['responsive'],
    ellipsis: ['responsive'],
    hyphens: ['responsive'],
    kerning: ['responsive'],
    textUnset: ['responsive'],
    fontVariantCaps: ['responsive'],
    fontVariantNumeric: ['responsive'],
    fontVariantLigatures: ['responsive'],
    textRendering: ['responsive'],
  },
  plugins: [
    require('postcss-import'),
    require('tailwindcss'),
    require('tailwindcss-typography')({
      // all these options default to the values specified here
      ellipsis: true,         // whether to generate ellipsis utilities
      hyphens: true,          // whether to generate hyphenation utilities
      kerning: true,          // whether to generate kerning utilities
      textUnset: true,        // whether to generate utilities to unset text properties
      componentPrefix: 'c-',  // the prefix to use for text style classes
    }),
    require('autoprefixer'),
  ],
};

// module.exports = {
//   purge: [],
//   darkMode: false, // or 'media' or 'class'
//   theme: {
//     extend: {},
//   },
//   variants: {
//     extend: {},
//   },
//   plugins: [],
// }