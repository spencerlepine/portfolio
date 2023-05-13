import React from 'react';
import LandingSection from '@styles/landingSection';
import BubbleLink from '@styles/bubbleLink';

const currentSituation = `
  I'm a Front-End Engineer working at Amazon Web Services (AWS) and soldier in the U.S. Army Reserves.
  Prior to my current role, I attended a 3-month Hack Reactor coding bootcamp.
`;
const additionalExperience = `
  I am experienced in Full-Stack development, with a strong focus on Frontend work. 
  While continuing to advance my technical skills, I enjoy sharing my progress by showcasing my work on GitHub and YouTube.
`;
const personalStrengths = `
  Being highly motivated is one of my strengths as a team member, along with my ability to quickly grasp new technologies.
  Additionally, I actively question existing processes, aiming to find ways to improve, automate, or script existing team workflows.
`;

const About = () => (
  <LandingSection id="about" isSkewSection>
    <div className="mx-auto max-w-4xl text-center py-10">
      <h2 className="text-primary mt-0">About Me</h2>

      <p className="text-secondary-text mb-0 max-w-xl mx-auto px-4">{currentSituation}</p>
      <p className="text-secondary-text mb-0 max-w-xl mx-auto px-4">{additionalExperience}</p>
      <p className="text-secondary-text mb-0 max-w-xl mx-auto px-4">{personalStrengths}</p>

      <div className="mt-6">
        <BubbleLink linkPath={'/about'} color="readmore" hasMargin>
          Read More
        </BubbleLink>
      </div>
    </div>
  </LandingSection>
);

export default About;
