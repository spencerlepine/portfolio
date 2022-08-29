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
    <section id="contact" >
      <h2 >Get In Touch</h2>

      <p className={`${promptStyle}`}>
        Want to work together or have any questions?
      </p>

      {showingEmail ? (
        <a href={`mailto:${email}`}>
          <p >
            {email}
          </p>
        </a>
      ) : (
        <p
          onClick={() => setShowingEmail(!showingEmail)}

        >
          Contact Me
          <Icon name="Email" customClass="ml-3 inline-block text-white" />
        </p>
      )}
    </section>
  );
};

export default Contact;
