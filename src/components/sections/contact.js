import React from 'react';
import { email } from '@config';

const Contact = () => (
  <section id="contact">
    <h2 className="title">Get In Touch</h2>

    <p>
      Any questions? Want to work together? Let's connect!
    </p>

    <a className="email-link" href={`mailto:${email}`}>
      Contact Me
    </a>
  </section>
);

export default Contact;
