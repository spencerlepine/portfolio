import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Head, Nav, Footer } from '@components';
import '../styles/layout.css';
import { ThemeContext } from '../contexts/themeContext';

const Layout = props => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`text-primary-text theme-${theme || 'light'} bg-primary`}>
      <Head />
      <Nav />

      <main className="mx-auto bg-primary">
        {props.children}
      </main>

      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.object,
};

export default Layout;
