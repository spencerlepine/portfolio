import React from 'react';
import { skills } from '@config';
import { Icon } from '@components/icons';

const Skills = () => (
  <section id="skills">
    <h2>My Tech Stack</h2>

    <ul>
      {skills.map(({ skill, icon }) => (
        <li key={skill}>
          <Icon name={icon}></Icon>
          <h3>{skill}</h3>
        </li>
      ))}
    </ul>
  </section >
);

export default Skills;
