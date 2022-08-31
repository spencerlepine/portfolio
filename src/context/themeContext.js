import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
export const ThemeContext = React.createContext({
  theme: '',
  setTheme: () => { },
});

const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');
  useEffect(() => {
    function loadTheme() {
      const theme = localStorage.getItem('theme');
      return theme || 'light';
    }
    setTheme(loadTheme());
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  const handleThemeToggle = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, handleThemeToggle }}>
      {children}
    </ThemeContext.Provider>
  );
};

ThemeContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ThemeContextProvider;