import React from 'react';
import { skills } from '@config';
import { Icon } from '@components/icons';

const SkillBubble = (skill, icon) => (
  <div className="flex px-2 py-1 border-2 border-solid border-tertiary rounded-md m-1">
    <Icon name={icon} customClass="h-8 text-tertiary mx-1 my-auto"></Icon>
    <h4 className="my-auto">{skill}</h4>
  </div>
);

const Skills = () => (
  <section id="skills" className="prose lg:prose-xl text-center min-w-full">
    <div className="max-w-2xl mx-auto border-2 border-solid border-text-primary px-8 pb-4 rounded-3xl">
      <h2 className="text-tertiary mt-6">My Tech Stack</h2>

      <div className="flex flex-wrap place-content-center ">
        {skills.map(({ skill, icon }) => (
          <div key={skill} className="flex">
            {SkillBubble(skill, icon)}
          </div>
        ))}
      </div>
    </div>
  </section >
);

export default Skills;
