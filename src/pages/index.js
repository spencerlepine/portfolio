import React from 'react';
import PropTypes from 'prop-types';
import { Layout, Welcome, About, Projects, Contact, Skills } from '@components';

// Jobs,
// <Jobs />

const IndexPage = ({ location }) => (
  <Layout location={location}>
    <main >
      <Welcome />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  </Layout>
);

IndexPage.propTypes = {
  location: PropTypes.object.isRequired,
};

export default IndexPage;
