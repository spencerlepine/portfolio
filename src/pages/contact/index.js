import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { Layout, Contact } from '@components';

const ContactPage = ({ location }) => (
  <Layout location={location}>
    <Helmet title="Contact" />

    <Contact />
  </Layout >
);

ContactPage.propTypes = {
  location: PropTypes.object.isRequired,
};

export default ContactPage;