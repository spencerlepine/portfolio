import React from 'react';
import PropTypes from 'prop-types';
import { Layout, Welcome, About, Jobs, Featured, Projects, Contact } from '@components';

const IndexPage = ({ location }) => (
  <Layout location={location}>
    <main className="m-4">
      <Welcome />
      <About />
      <Jobs />
      <Featured />
      <Projects />
      <Contact />
    </main>
  </Layout>
);

IndexPage.propTypes = {
  location: PropTypes.object.isRequired,
};

export default IndexPage;
