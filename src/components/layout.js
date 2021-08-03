import React from 'react';
import PropTypes from 'prop-types';
import { Head, Nav, Footer, Socials } from '@components';

const Layout = ({ children, location }) => (
  <>
    <Head />

    <div id="root" className="w-full overflow-x-hidden">
      <div>
        <Nav />

        <div id="content">
          {children}
          <Socials />
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
