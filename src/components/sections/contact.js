/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import { email } from '@config';
import { Icon } from '@components/icons';

const Contact = () => {
  const [showingEmail, setShowingEmail] = useState(false);

  // const promptStyle = 'text-xl my-5 mx-auto w-min whitespace-nowrap';
  const promptStyle = 'flex-wrap text-xl my-5 mx-auto text-center';

  return (
    <section id="contact" className="landing-section">
      <h2 className="section-title">Get In Touch</h2>

      <p className={`${promptStyle}`}>
        Any questions? Want to work together? Let's connect!
      </p>

      {showingEmail ? (
        <a href={`mailto:${email}`}>
          <p className="w-min whitespace-nowrap mx-auto my-5 px-7 py-3 border-solid border-4 border-navy-light text-white bg-navy-medium">
            {email}
          </p>
        </a>
      ) : (
        <p
          onClick={() => setShowingEmail(!showingEmail)}
          className="w-min whitespace-nowrap mx-auto my-5 px-7 py-3 border-solid border-4 border-navy-light text-white bg-navy-medium"
        >
          Contact Me
          <Icon name="Email" customClass="ml-3 inline-block text-white" />
        </p>
      )}

    </section>
  );
};

export default Contact;
