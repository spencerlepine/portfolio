import React from 'react';
import { Link } from 'gatsby';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import { Layout, Emoji } from '@components';

const NotFoundPage = ({ location }) => (
  <Layout location={location}>
    <Helmet title="Page Not Found" />

    <main className="m-10 flex-1 min-h-full min-w-90 rounded-xl bg-white shadow-lg p-10 lg:p-20 text-gray-800 relative items-center text-center md:text-center">
      <h1 className="block font-black uppercase text-3xl lg:text-5xl text-red-500 mb-3">Error 404</h1>
      <h2 className="text-xl text-gray-300 mb-6">Page Not Found</h2>
      <Link to="/" className="text-lg"><Emoji symbol="🏠" /> Go Home</Link>
    </main>
  </Layout>
);

NotFoundPage.propTypes = {
  location: PropTypes.object.isRequired,
};

export default NotFoundPage;
