import React from 'react';
import { email } from '@config';

const Contact = () => (
  <section id="contact" className="landing-section">
    <h2 className="section-title">Get In Touch</h2>

    <p>
      Any questions? Want to work together? Let's connect!
    </p>

    <a href={`mailto:${email}`} className="m-5 px-7 py-3 border-solid border-4 border-navy-light text-navy-dark">
      Contact Me
    </a>
  </section>
);

export default Contact;
