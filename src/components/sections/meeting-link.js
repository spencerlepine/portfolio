import React from 'react';
import BubbleLink from '@styles/bubbleLink';
import { Icon } from '@components/icons';
import LandingSection from '@styles/landingSection';

const githubLink = 'https://github.com/spencerlepine';
const meetingLink = 'https://calendly.com/spencerlepine';

const LinkPrompt = (iconName, promptTitle, promptMessage, linkText, link) => (
  <div className="m-4">
    <Icon name={iconName} customClass="h-16 text-tertiary mx-auto opacity-50"></Icon>

    <h2 className="text-primary m-2 text-4xl font-bold">{promptTitle}</h2>
    <p className="text-secondary-text mb-4 px-8 max-w-sm">{promptMessage}</p>

    <BubbleLink linkPath={link} color="button">{linkText}</BubbleLink>
  </div>
);

const Extra = () => (
  <LandingSection id="moreLinks" isSkewSection>
    <div className="flex text-center flex-wrap mx-auto max-w-4xl py-20">
      {LinkPrompt('GitHub', 'View Projects', 'Looking to read or explore actual code? Find more over on my GitHub profile.', 'Open GitHub', githubLink)}

      {LinkPrompt('Meeting', 'Book Meeting', 'Interested in a virtual coffee chat? Easily book a meeting with me through Calendly.', 'Let\'s Chat', meetingLink)}
    </div>
  </LandingSection>
);

export default Extra;
