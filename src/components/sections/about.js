import React from 'react';
import SkewWrapper from '@styles/SkewWrapper';

const About = () => (
  <SkewWrapper>
    <section id="about" className="prose lg:prose-xl text-center bg-secondary min-w-full" style={{ borderBottomRightRadius: '5em', borderTopLeftRadius: '5em' }}>
      <div className="mx-auto max-w-4xl text-center py-10">
        <h2 className="text-primary mt-0">About Me</h2>

        <p className="text-secondary-text mb-0 max-w-xl mx-auto">
          I'm a front-end software engineer and reservist in the U.S. Army. My mission is to build the future today and be surrounded by innovation. By working on both frontend and backend systems, I have experience with popular tools like React, TypeScript, Node.js, SQL, and MongoDB. Also, using Docker, GitHub Actions, AWS EC2, and Heroku, I love finding ways to automate my development, to test, build, and deploy.
        </p>
      </div>
    </section>
  </SkewWrapper>
);

export default About;
