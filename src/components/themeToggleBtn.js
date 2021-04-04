import React, { useContext } from 'react';
import Toggle from 'react-toggle';
import { ThemeContext } from '../contexts/themeContext';

const MoonIcon = () => (
  <div
    style={{
      color: '#fff',
      fontSize: '1.2em',
      position: 'absolute',
      top: '0.2em',
    }}
  >
    ☾
  </div>
);

const SunIcon = () => (
  <div
    style={{
      color: '#fff',
      fontSize: '1.2em',
      position: 'absolute',
      top: '0.2em',
      right: '-0.4em',
    }}
  >
    ☀
  </div>
);

const ThemeToggleBtn = () => {
  const { theme, handleThemeToggle } = useContext(ThemeContext);

  return (
    <Toggle
      defaultChecked={theme === 'dark'}
      icons={{
        checked: <MoonIcon />,
        unchecked: <SunIcon />,
      }}
      onChange={handleThemeToggle}
    />
  );
};

export default ThemeToggleBtn;
