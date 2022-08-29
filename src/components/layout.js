import React from 'react';
import PropTypes from 'prop-types';
import { Head, Nav, Footer } from '@components';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader

const Layout = ({ children }) => (
  <>
    <Head />

    <div id="root" >
      <div>
        <Nav />

        <div id="content" >
          {children}
        </div>

        <Footer />
      </div>
    </div>
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.object,
};

export default Layout;
