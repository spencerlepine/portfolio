import React from 'react';
import PropTypes from 'prop-types';
import { Head, Nav, Footer } from '@components';
import '../styles/layout.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader

// import theme from '../styles/theme';
// const darkMode = false;

const Layout = props => (
  <>
    <Head />
    <Nav />

    <main>
      {props.children}
    </main>

    <Footer />
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.object,
};

export default Layout;
