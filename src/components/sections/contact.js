import React from 'react';
import { email } from '@config';
import { Icon } from '@components/icons';

const Contact = () => (
  <section id="contact" className="landing-section">
    <h2 className="section-title">Get In Touch</h2>

    <p className="text-xl my-5 mx-auto w-min whitespace-nowrap">
      Any questions? Want to work together? Let's connect!
    </p>

    <a href={`mailto:${email}`}>
      <p className="w-min whitespace-nowrap mx-auto my-5 px-7 py-3 border-solid border-4 border-navy-light text-white bg-navy-medium">
        Contact Me
        <Icon name="Email" customClass="ml-3 inline-block text-white" />
      </p>
    </a>
  </section>
);

export default Contact;
