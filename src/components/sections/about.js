import React from 'react';
import LandingSection from '@styles/landingSection';

const About = () => (
  <LandingSection id="about" isSkewSection>
    <div className="mx-auto max-w-4xl text-center py-10">
      <h2 className="text-primary mt-0">About Me</h2>

      <p className="text-secondary-text mb-0 max-w-xl mx-auto px-4">
        I'm a front-end software engineer and reservist in the U.S. Army. My mission is to build the future today and be surrounded by innovation. By working on both frontend and backend systems, I have experience with popular tools like React, TypeScript, Node.js, SQL, and MongoDB. Also, using Docker, GitHub Actions, AWS EC2, and Heroku, I love finding ways to automate my development, to test, build, and deploy.
      </p>
    </div>
  </LandingSection>
);

export default About;
