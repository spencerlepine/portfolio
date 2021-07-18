import React from 'react';
import PropTypes from 'prop-types';
import { Head, Nav, Footer } from '@components';

const Layout = ({ children, location }) => {
  const isHome = location.pathname === '/';

  return (
    <>
      <Head />

      <div id="root">
        <div>
          <Nav isHome={isHome} />

          <div id="content">
            {children}
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.object.isRequired,
};

export default Layout;
