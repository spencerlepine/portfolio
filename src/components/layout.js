import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Head, Nav, Footer } from '@components';
import '../styles/layout.css';
import { ThemeContext } from '../context/themeContext';

const Layout = props => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`text-primary-text ${theme === 'light' ? 'theme-light' : 'theme-dark'}`}>
      <Head />
      <Nav />

      <div className="max-w-4xl mx-auto">
        <main>
          {props.children}
        </main>

        <Footer />
      </div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.object,
};

export default Layout;
