import React from 'react';
import PropTypes from 'prop-types';
import { Head, Nav, Footer } from '@components';

const Layout = ({ children, location }) => (
  <>
    <Head />

    <div id="root" className="w-full overflow-x-hidden">
      <div className="flex flex-col h-screen">
        <Nav />

        <div id="content" className="flex-grow">
          {children}
        </div>

        <Footer />
      </div>
    </div>
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.object.isRequired,
};

export default Layout;
