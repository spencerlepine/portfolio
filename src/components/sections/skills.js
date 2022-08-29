import React from 'react';
import { skills } from '@config';

const Skills = () => (
  <section id="skills">
    <h2 >
      Skills
    </h2>

    {skills.map(({ name, tech }) => (
      <ul key={name} >
        <li>
          <h3 >
            {name}:
          </h3>
        </li>
        {tech.map((skill, i) => (
          <li key={i} >
            <h3  >{skill}</h3>
            <span >{i !== tech.length - 1 ? ', ' : ''}</span>
          </li>
        ))}
      </ul>
    ))}
  </section >
);

export default Skills;
