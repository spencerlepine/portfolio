import React, { useState } from 'react';
import LandingSection from '@styles/landingSection';

const FORM_ENDPOINT = 'https://public.herotofu.com/v1/aae45b10-27cb-11ed-9d54-c9f9d2b00e7b';

const ContactForm = () => {
  const [status, setStatus] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();

    // Anything you need to inject dynamically
    const submissionDate = new Date();
    const injectedData = {
      SUBMISSION_DATE: submissionDate.toString(),
    };
    const inputs = e.target.elements;
    const data = {};

    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].name) {
        data[inputs[i].name] = inputs[i].value;
      }
    }

    Object.assign(data, injectedData);

    fetch(FORM_ENDPOINT, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(response => {
        // It's likely a spam/bot request, so bypass it to validate via captcha
        if (response.status === 422) {
          Object.keys(injectedData).forEach(key => {
            const el = document.createElement('input');
            el.type = 'hidden';
            el.name = key;
            el.value = injectedData[key];

            e.target.appendChild(el);
          });

          e.target.submit();
          throw new Error('Please finish the captcha challenge');
        }

        if (response.status !== 200) {
          throw new Error(response.statusText);
        }

        return response.json();
      })
      .then(() => setStatus('We\'ll be in touch soon.'))
      .catch(err => setStatus(err.toString()));
  };

  if (status) {
    return (
      <>
        <div>Thank you!</div>
        <div>{status}</div>
      </>
    );
  }

  return (
    <form
      action={FORM_ENDPOINT}
      onSubmit={handleSubmit}
      method="POST"
      target="_blank"
      className="max-w-md mx-auto py-10 pt-4 mb-20"
    >
      <div className="mb-4">
        <input
          type="text"
          placeholder="Name"
          name="name"
          className="w-full p-4 text-xs font-semibold border-2 border-text-primary rounded"
          required
        />
      </div>
      <div className="mb-4">
        <input
          type="email"
          placeholder="name@example.com"
          className="w-full p-4 text-xs font-semibold border-2 border-text-primary rounded"
          name="email"
          required
        />
      </div>
      <div className="mb-4">
        <textarea
          placeholder="Message..."
          className="w-full p-4 text-xs font-semibold h-24 border-2 border-text-primary rounded"
          name="message"
          required
        />
      </div>
      <div className="text-right">
        <button type="submit" className="bg-secondary text-primary border-secondary px-6 py-2 font-bold border-2 border-solid rounded-xl">
          Submit
        </button >
      </div>
    </form>
  );
};

const Contact = () => (
  <LandingSection id="contact">
    <h2 className="text-title-text m-6 text-2xl font-bold">Contact</h2>

    <p className="text-primary-text">
      Want to work together or have any questions?
    </p>

    <ContactForm />
  </LandingSection>
);

export default Contact;
