import React from 'react';
import PropTypes from 'prop-types';
import { Layout, Contact, Head } from '@components';

const ContactPage = ({ location }) => (
  <Layout location={location}>
    <Head title="Contact Form | @SpencerLepine - Software Engineer" description="Want to work together or have any questions? Contact Spencer Lepine directly through the contact form." />

    <Contact />
  </Layout >
);

ContactPage.propTypes = {
  location: PropTypes.object.isRequired,
};

export default ContactPage;