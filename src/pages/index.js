import React from 'react';
import PropTypes from 'prop-types';
import { Layout, Welcome, About, LandingPortfolio, Contact, Skills, ExtraLinks } from '@components';
import { Helmet } from 'react-helmet';

const IndexPage = ({ location }) => (
  <Layout location={location}>
    <Helmet title="Home" />

    <Welcome />
    <About />
    <Skills />
    <LandingPortfolio />
    <ExtraLinks />
    <Contact />
  </Layout>
);

IndexPage.propTypes = {
  location: PropTypes.object.isRequired,
};

export default IndexPage;
