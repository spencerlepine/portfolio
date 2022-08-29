import React from 'react';
import { skills } from '@config';

const Skills = () => (
  <section id="skills" >
    <div>
      <div>
        <div>
          <div>
            <h2 >
              Skills
            </h2>
          </div>

          {skills.map(({ name, tech }) => (
            <ul key={name} >
              <li>
                <h3 >
                  {name}:
                </h3>
              </li>
              {tech.map((skill, i) => (
                <li key={i} >
                  {/* <span >▹</span> */}
                  <h3  >{skill}</h3>
                  <span >{i !== tech.length - 1 ? ', ' : ''}</span>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </div>
  </section >
);

export default Skills;
