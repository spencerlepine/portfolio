import React from 'react';
import PropTypes from 'prop-types';
import { Head, Nav, Footer } from '@components';

import '../styles/layout.css';
import { Grommet, Box } from 'grommet';
import { grommet } from 'grommet/themes';
import { deepMerge } from 'grommet/utils';
import spencerTheme from '../styles/theme';

import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader

const theme = deepMerge(grommet, spencerTheme);
const darkMode = false;

const Layout = props => (
  <Grommet
    theme={theme}
    themeMode={darkMode ? 'dark' : 'light'}
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
