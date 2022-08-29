import React from 'react';
import PropTypes from 'prop-types';
import { Head, Nav, Footer } from '@components';

import '../styles/layout.css';
import { Grommet, Box } from 'grommet';
import { grommet } from 'grommet/themes';

import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader

const Layout = props => (
  <Grommet
    theme={grommet}
    full
    style={{
      display: 'flex',
      flexDirection: 'column',
    }}
  >
    <Head />
    <Nav />

    <Box as="main" pad="medium" flex overflow="auto">
      {props.children}
    </Box>

    <Footer />
  </Grommet>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.object,
};

export default Layout;
