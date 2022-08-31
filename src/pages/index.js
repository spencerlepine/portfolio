import React from 'react';
import PropTypes from 'prop-types';
import { Layout, Welcome, About, Projects, Contact, Skills, ExtraLinks } from '@components';

// Jobs,
// <Jobs />

const IndexPage = ({ location }) => (
  <Layout location={location}>
    <Welcome />
    <About />
    <Skills />
    <Projects />
    <ExtraLinks />
    <Contact />
  </Layout>
);

IndexPage.propTypes = {
  location: PropTypes.object.isRequired,
};

export default IndexPage;
