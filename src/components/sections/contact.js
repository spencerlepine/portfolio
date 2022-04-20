/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import { email, socialMedia } from '@config';
import { Icon } from '@components/icons';

const Contact = () => {
  const [showingEmail, setShowingEmail] = useState(false);

  // const promptStyle = 'text-xl my-5 mx-auto w-min whitespace-nowrap';
  const promptStyle = 'flex-wrap text-xl my-5 mx-auto text-center';

  return (
    <section id="contact" className="landing-section">
      <h2 className="section-title">Get In Touch</h2>

      <p className={`${promptStyle}`}>
        Ready to build the future? Let's connect!
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

      <h2 className="section-title">Also Find Me Here:</h2>
      <div className="m-auto w-max my-4">
        {socialMedia.map((social, i) => (
          <a href={social.url} className="" key={i}>
            <Icon name={social.name} customClass="inline m-1 mx-3 text-purple-400 transform transition duration-500 hover:scale-125"></Icon>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Contact;
