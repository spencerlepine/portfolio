import React from 'react';
import { skills } from '@config';

const Skills = () => (
  <section id="skills" className="landing-section">
    <div className="grid auto-cols-auto">
      <div className="m-auto max-w-4xl flex-column mt-4 sm:grid md:flex lg:flex">
        <div className="w-auto relative max-w-2xl p-1 mt-2 text-lg leading-relaxed text-blueGray-500 flex-1 m-auto md:grid lg:inline sm:grid sm:grid-cols-2 xs:grid xs:grid-cols-2">
          <div className="m-auto sm:col-span-2 xs:col-span-2">
            <h2 className="m-auto w-fit uppercase px-7 py-2 text-green-700 bg-green-100 font-bold m-1 rounded-md text-2xl font-semibold">
              Skills
            </h2>
          </div>

          {skills.map(({ name, tech }) => (
            <ul key={name} className="max-w-2xl w-fit-content lg:flex my-2 flex-wrap mx-4 col-span-1 md:grid sm:grid xs:grid md:col-span-1 sm:col-span-2 xs:col-span-2">
              <li>
                <h3 className="font-bold text-xl inline-block p-1">
                  {name}:
                </h3>
              </li>
              {tech.map((skill, i) => (
                <li key={i} className="flex lg:p-1 md:p-1">
                  {/* <span className="w-min my-auto">▹</span> */}
                  <h3 className="tech-skill w-max p-3 sm:p-0 xs:p-0 my-1 transform transition duration-500 hover:scale-110 text-blueGray-500 " >{skill}</h3>
                  <span className="w-min my-auto lg:flex hidden">{i !== tech.length - 1 ? ', ' : ''}</span>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </div >
  </section >
);

export default Skills;
