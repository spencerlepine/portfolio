module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  variants: {},
  plugins: [
    require('@tailwindcss/typography'),
  ],
  important: true,
  theme: {
    extend: {
      colors: {
        primary: 'var(--alabasterWhite)',
        secondary: 'var(--celticBlue)',
        tertiary: 'var(--blackPearl)',
        'button-primary': 'var(--buttonBlue)',
        'link-primary': 'var(--linkBlue)',
        'primary-text': 'var(--textOnWhite)',
        'secondary-text': 'var(--textOnBlue)',
      },
    },
  },
};
