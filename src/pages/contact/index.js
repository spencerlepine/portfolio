import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { Layout } from '@components';
import ContactForm from '@components/sections/contact';

const ContactPage = ({ location }) => (
  <Layout location={location}>
    <Helmet title="Contact" />

    <ContactForm />
  </Layout >
);

ContactPage.propTypes = {
  location: PropTypes.object.isRequired,
};

export default ContactPage;