import React from 'react';
import PropTypes from 'prop-types';
import { Layout, Contact, Head } from '@components';

const ContactPage = ({ location }) => (
  <Layout location={location}>
    <Head title="Contact" description="Spencer Lepine contact form." />

    <Contact />
  </Layout >
);

ContactPage.propTypes = {
  location: PropTypes.object.isRequired,
};

export default ContactPage;