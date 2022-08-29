import React from 'react';
import { skills } from '@config';

const Skills = () => (
  <section id="skills">
    <h2>Skills</h2>

    <ul>
      {skills.map(skill => (
        <li key={skill}>
          <h3 >{skill}</h3>
        </li>
      ))}
    </ul>
  </section >
);

export default Skills;
