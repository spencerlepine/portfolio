import React from 'react';
import PropTypes from 'prop-types';
import { Layout, AboutPage as About, Head } from '@components';

const AboutPage = ({ location }) => (
  <Layout location={location}>
    <Head title="About | @SpencerLepine - Software Engineer" description="Spencer Lepine is a Front-End Engineer working at Amazon Web Services (AWS) and soldier in the U.S. Army Reserves." />

    <About />
  </Layout >
);

AboutPage.propTypes = {
  location: PropTypes.object.isRequired,
};

export default AboutPage;