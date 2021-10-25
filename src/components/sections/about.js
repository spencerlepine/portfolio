import React, { useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';

const About = () => {
  const revealContainer = useRef(null);

  const skills = ['JavaScript (ES5/ES6)', 'React', 'Firebase', 'Node.js', 'Express'];

  return (
    <section id="about" ref={revealContainer} className="landing-section">
      <h2 className="section-title">About Me</h2>

      <div className="m-auto max-w-4xl grid flex-column mt-4 sm:grid md:grid lg:flex">
        <div className="w-auto relative max-w-xl p-1 mt-2 text-lg leading-relaxed text-blueGray-500 flex-1 m-auto">
          <p className="p-1 w-auto m-auto">
            After stumbling upon a Javascript course in my late teens, I fell in love with programming mini-games and websites.
            This sparked my curiosity for understand how websites and products are built.
          </p>

          <p className="p-1 w-auto m-auto">
            Fast forward to the present, I have completed the Hack Reactor Software Engineering Immersive and began building my portfolio.
          </p>

          <p className="p-1 w-autom m-auto">
            At each milestone of my coding journey, there was always more to learn.
            I love surrounding myself with progress and innovation.
          </p>
        </div>

        <div>
          <div className="wrapper flex items-center justify-center w-max h-full m-auto">
            <StaticImage
              className="w-60 align-middle m-auto my-4"
              src="../../images/me.jpg"
              width={500}
              quality={95}
              formats={['AUTO', 'WEBP', 'AVIF']}
              alt="Spencer Lepine Headshot Profile"
            />
          </div>
        </div>
      </div>

      <p className="uppercase m-auto w-fit-content text-navy-medium font-semibold">Skills:</p>
      <ul className="max-w-2xl w-fit-content flex my-6 m-auto flex-wrap">
        {skills && skills.map((skill, i) => (
          <li className="w-fit-content px-2 py-1 mx-2 border-solid border-4 border-purple-100 text-charcoal inline"
            key={i}>
            {skill}
          </li>
        ))}
      </ul>
    </section >
  );
};

export default About;
