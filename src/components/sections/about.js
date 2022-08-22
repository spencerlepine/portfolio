import React from 'react';

const About = () => (
  <section id="about" className="landing-section">
    <div className="grid auto-cols-auto">
      <div className="m-auto max-w-4xl grid flex-column mt-4 sm:grid md:grid lg:flex">
        <div className="w-auto relative max-w-2xl p-1 mt-2 text-lg leading-relaxed text-blueGray-500 flex-1 m-auto">
          <div className="m-auto">
            <h2 className="m-auto w-fit uppercase px-7 py-2 text-blue-700 font-bold bg-blueGray-100 m-1 rounded-md text-2xl font-semibold">
              About Me
            </h2>
          </div>

          <p className="px-10 py-2 w-auto m-auto">
            &ensp; I am currently serving in the US Army Reserve while pursuing my dream career in tech. My mission is to build the future today and be surrounded by innovation.
          </p>

          <p className="px-10 py-2 w-auto m-auto">
            &ensp; By working on both frontend and backend systems, I have experience with popular tools like React, NodeJS, PostgreSQL, and MongoDB. Using Docker, GitHub Actions, AWS EC2, and Heroku, I love finding ways to automate my development, to test, build, and deploy.
          </p>
        </div>
      </div>
    </div >
  </section >
);

export default About;
