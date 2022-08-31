module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  variants: {},
  plugins: [],
  important: true,
  theme: {
    extend: {
      colors: {
        primary: 'var(--alabasterWhite)',
        secondary: 'var(--celticBlue)',
        tertiary: 'var(--blackPearl)',
        'button-primary': 'var(--buttonBlue)',
        'link-primary': 'var(--linkBlue)',
        'text-primary': 'var(--textOnWhite)',
        'text-secondary': 'var(--textOnBlue)',
      },
    },
  },
};
