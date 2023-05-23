import React, { Suspense } from 'react';
import LandingSection from '@styles/landingSection';
import { socialMedia } from '@config';
import { Icon } from '@components/icons';
import { StaticImage } from 'gatsby-plugin-image';
import { Skills } from '@components';

const aboutImg = '../assets/images/me-slu.png';

const currentSituation = `
  I'm Spencer Lepine, a Software Engineer based in Seattle.
  Originally from the east-coast, I moved to the PNW in 2021 before attending Hack Reactor, a 3 month coding bootcamp.
`;
const additionalExperience = `
  I am experienced in Full-Stack development, with a strong focus on Frontend work. 
  While continuing to advance my technical skills, I enjoy sharing my progress by showcasing my work on GitHub and YouTube.
`;
const personalStrengths = `
  Being highly motivated is one of my strengths as a team member, along with my ability to quickly grasp new technologies.
  Additionally, I actively question existing processes, aiming to find ways to improve, automate, or script existing team workflows.
`;
const history = `
   My passion for web development began in high school, building mini-games in JavaScript and Python, developing React apps, and exploring open-source projects on GitHub.
`;
const hobbies = `
Outside of work, I love to go hiking, explore new cities, and experience the outdoors of the PNW.
`;

const About = () => (
  <LandingSection id="contact">
    <div className="text-center mx-auto">
      <h2 className="text-title-text m-6 text-2xl font-bold">About</h2>
    </div>
    <div className="mx-auto max-w-6xl xs:py-4 sm:py-4">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2">
        <div className="mx-auto text-left flex flex-col max-w-xl mb-5">
          <div className="mx-auto max-w-4xl text-left">
            <p className="text-primary-text mb-0 max-w-xl mx-auto px-4">{currentSituation}</p>
            <p className="text-primary-text mb-0 max-w-xl mx-auto px-4">{history}</p>
            <p className="text-primary-text mb-0 max-w-xl mx-auto px-4">{hobbies}</p>

            <p className="text-primary-text mb-0 max-w-xl mx-auto px-4 text-center">...</p>

            <p className="text-primary-text mb-0 max-w-xl mx-auto px-4">{additionalExperience}</p>
            <p className="text-primary-text mb-0 max-w-xl mx-auto px-4">{personalStrengths}</p>
          </div>
        </div>

        <div className="mx-auto text-center flex flex-col max-w-sm">
          <Suspense fallback={<div>Loading...</div>}>
            <div className="rounded-full">
              <StaticImage
                src={aboutImg}
                className="flex justify-center max-w-full h-auto m-1 mb-4 border-8 border-solid border-gray-200"
                quality={90}
                formats={['AUTO', 'WEBP', 'AVIF']}
                alt="Spencer Lepine Headshot Profile"
              />
            </div>
          </Suspense>

          <div className="flex mx-auto">
            {socialMedia.map((social, i) => (
              <a href={social.url} key={i}>
                <Icon name={social.name} customClass="h-10 text-title-text mx-1"></Icon>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>

    <Skills />
  </LandingSection>
);

export default About;
