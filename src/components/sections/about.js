import React, { useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';

const About = () => {
  const revealContainer = useRef(null);

  const skills = ['JavaScript (ES6+)', 'React', 'Firebase', 'Node.js', 'Python'];

  return (
    <section id="about" ref={revealContainer} className="m-4 bg-white">
      <h2 className="numbered-heading">About Me</h2>

      <div className="inner">
        <div>
          <div>
            <p>
              My name is Spencer and building things for the web is my passion.
              In my late teens, my curiosity drove me to better understand how sites and products were created.
              I was inspired to learn about the basics of Web Development in my free time.
            </p>

            <p>
              At each milestone of my coding journey, there was always more to learn.
              I love surrounding myself with progress and innovation.
              There is opportunity to question what already exists, create a better solution, or even build new solutions from scratch.
            </p>
          </div>

          <ul className="skills-list">
            {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
        </div>

        <div>
          <div className="wrapper">
            <StaticImage
              className="img"
              src="../../images/me.jpg"
              width={500}
              quality={95}
              formats={['AUTO', 'WEBP', 'AVIF']}
              alt="Headshot"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
