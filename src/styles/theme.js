const DaisyBush = '​#541C8C';
const Alabaster = '#FCFCFC';
const CuriosBlue = '#1B9BE3';
const BlackPearl = '#040B14';

function LightenDarkenColor(col, amt) {
  let usePound = false;
  if (col[0] === '#') {
    col = col.slice(1);
    usePound = true;
  }

  const num = parseInt(col, 16);

  let r = (num >> 16) + amt;

  if (r > 255) { r = 255; } else if (r < 0) { r = 0; }

  let b = ((num >> 8) & 0x00FF) + amt;

  if (b > 255) { b = 255; } else if (b < 0) { b = 0; }

  let g = (num & 0x0000FF) + amt;

  if (g > 255) { g = 255; } else if (g < 0) { g = 0; }

  return (usePound ? '#' : '') + (g | (b << 8) | (r << 16)).toString(16);
}

export const spencerTheme = {
  global: {
    colors: {
      /* BEGIN: Color Palette Definition */
      purple: {
        dark: LightenDarkenColor(DaisyBush, -10),
        light: LightenDarkenColor(DaisyBush, 10),
      },
      'purple!': DaisyBush,
      white: {
        dark: LightenDarkenColor(Alabaster, -10),
        light: LightenDarkenColor(Alabaster, 10),
      },
      'white!': Alabaster,
      blue: {
        dark: LightenDarkenColor(CuriosBlue, -10),
        light: LightenDarkenColor(CuriosBlue, 10),
      },
      'blue!': CuriosBlue,
      black: {
        dark: LightenDarkenColor(BlackPearl, -10),
        light: LightenDarkenColor(BlackPearl, 10),
      },
      'black!': BlackPearl,
      'grey-1': '#ECE9E3',
      'grey-2': '#CECCC6',
      'grey-3': '#737069',
      'grey-4': '#52504C',
      /* END: Color Palette Definition */
      /* BEGIN: Mapping Colors to Grommet Namespaces */
      background: {
        dark: 'white',
        light: LightenDarkenColor(Alabaster, 10), // 'white.dark'?
      },
      'background-back': {
        dark: 'white',
        light: LightenDarkenColor(Alabaster, 10), // 'white.dark'?
      },
      'background-front': {
        dark: 'grey-3',
        light: 'grey-2',
      },
      brand: 'purple!',
      control: {
        dark: 'brand',
        light: 'brand',
      },
      input: {
        background: 'blue',
      },
      text: {
        dark: 'grey-1',
        light: 'grey-3',
      },
    },
    focus: {
      border: {
        color: 'blue',
      },
    },
    /* END: Mapping Colors to Grommet Namespaces */
  },
  /* BEGIN: Mapping Colors to Components */
  anchor: {
    color: {
      dark: 'black',
      light: 'white!',
    },
  },
  /* END: Mapping Colors to Components */
};

export default spencerTheme;