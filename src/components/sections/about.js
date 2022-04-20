import React, { useRef } from 'react';
// import { Icon } from '@components/icons';

const About = () => {
  const revealContainer = useRef(null);

  const skills = ['JavaScript', 'React', 'Firebase', 'Node.js', 'Express', 'MongoDB', 'Jest', 'Docker', 'AWS EC2'];

  return (
    <section id="about" ref={revealContainer} className="landing-section">

      <div className="grid grid-cols-2">
        <div className="m-auto max-w-4xl grid flex-column mt-4 sm:grid md:grid lg:flex">
          <div className="w-auto relative max-w-sm p-1 mt-2 text-lg leading-relaxed text-blueGray-500 flex-1 m-auto">
            <div className="w-fit m-auto">
              <h2 className="m-auto w-fit uppercase px-7 py-2 text-red-700 font-bold bg-red-100 m-1 rounded-md text-2xl font-semibold">About Me</h2>
            </div>


            <p className="p-1 w-auto m-auto">
              &ensp; I'm a US Army Reservist and Full Stack Software Engineer living in the Greater Seattle Area.
            </p>

            <p className="p-1 w-auto m-auto">
              &ensp; As a recent graduate of the Hack Reactor Software Engineering Immersive, I'm a passionate learner and highly motivated.
            </p>

            <p className="p-1 w-auto m-auto">
              &ensp; In my freetime, I love listening to music, hiking, and watching Studio Ghibli movies.
            </p>
          </div>
        </div>

        <div className="wrapper flex items-center justify-center h-full m-auto grid grid-cols-1">
          <div className="w-auto relative max-w-sm p-1 mt-2 text-lg leading-relaxed text-blueGray-500 flex-1 m-auto">

            <div className="w-auto relative max-w-sm p-1 mt-2 text-lg leading-relaxed text-blueGray-500 flex-1 m-auto">

              <h2 className="m-auto uppercase px-7 py-2 text-blue-700 font-bold bg-blue-100 m-1 rounded-md text-2xl font-semibold">Skills</h2>

              <ul className="max-w-2xl w-fit-content flex my-6 m-auto flex-wrap grid grid-cols-3 text-center">
                {skills && skills.map((skill, i) => (
                  <h3 key={i} className="project-title w-max mx-3 m-2 mx-2 p-3  my-4 transform transition duration-500 hover:scale-110">{skill}</h3>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section >
  );
};

export default About;
