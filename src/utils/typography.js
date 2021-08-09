import Typography from 'typography';
import moragaTheme from 'typography-theme-moraga';
import CodePlugin from 'typography-plugin-code';

moragaTheme.plugins = [
  new CodePlugin(),
];

const typography = new Typography(moragaTheme);

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles();
}

export default typography;