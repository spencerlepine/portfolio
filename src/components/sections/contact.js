import React, { useState } from 'react';

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
    >
      <div>
        <input
          type="text"
          placeholder="Your name"
          name="name"
          required
        />
      </div>
      <div>
        <input
          type="email"
          placeholder="Email"
          name="email"
          required
        />
      </div>
      <div>
        <textarea
          placeholder="Your message"
          name="message"
          required
        />
      </div>
      <div>
        <button type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};

const Contact = () => (
  <section id="contact" >
    <h2>Contact</h2>

    <p>
      Want to work together or have any questions?
    </p>


    <ContactForm />
  </section>
);

export default Contact;
