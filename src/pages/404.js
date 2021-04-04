import React from 'react';
import { Link } from 'gatsby';
import { Head, Layout } from '@components';
import PropTypes from 'prop-types';

const NotFoundPage = ({ location }) => (
  <Layout location={location}>
    <Head title="Spencer Lepine | Software Engineer" />

    <main className="min-h-screen">
      <div className="m-8 container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <div className="max-w-md text-center">
          <p className="mb-8 font-extrabold text-6xl">404</p>

          <p className="text-2xl font-semibold md:text-3xl">Sorry, we couldn't find this page.</p>

          <br />
          <Link to="/" className="text-button-primary"> Go Home</Link>
        </div>
      </div>
    </main>
  </Layout>
);

NotFoundPage.propTypes = {
  location: PropTypes.object.isRequired,
};

export default NotFoundPage;
