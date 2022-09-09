import React from 'react';
import PropTypes from 'prop-types';
import { Layout, Welcome, About, Projects, Contact, Skills, ExtraLinks } from '@components';
import { Helmet } from 'react-helmet';

// Jobs,
// <Jobs />

const IndexPage = ({ location }) => (
  <Layout location={location}>
    <Helmet title="Home" />

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
