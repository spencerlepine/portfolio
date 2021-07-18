import React from 'react';
import PropTypes from 'prop-types';
import { Head, Nav, Footer } from '@components';

const Layout = ({ children, location }) => (
  <>
    <Head />

    <div id="root">
      <div>
        <Nav />

        <div id="content">
          {children}
          <Footer />
        </div>
      </div>
    </div>
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.object.isRequired,
};

export default Layout;
