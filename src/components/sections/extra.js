import React from 'react';
import BubbleLink from '@styles/bubbleLink';
import SkewWrapper from '@styles/SkewWrapper';

const githubLink = 'https://github.com/spencerlepine';
const meetingLink = 'https://calendly.com/spencerlepine';

const Extra = () => (
  <SkewWrapper>
    <section id="moreLinks" className="min-w-full bg-secondary relative" style={{ borderBottomRightRadius: '5em', borderTopLeftRadius: '5em' }}>
      <div className="flex text-center mx-auto max-w-4xl py-20">
        <div id="moreProjects">
          <img alt="GitHub Logo" />

          <h2 className="text-primary">More Projects</h2>
          <p className="text-secondary-text">Looking to read or explore actual code? Find more over on my GitHub profile.</p>

          <BubbleLink linkPath={githubLink} color="brand">Open GitHub</BubbleLink>
        </div>

        <div id="bookMeeting">
          <img alt="Meeting Icon" />

          <h2 className="text-primary">Book Meeting</h2>
          <p className="text-secondary-text">Interested in a virtual coffee chat? Easily book a meeting with me through Calendly.</p>

          <BubbleLink linkPath={meetingLink} color="brand">Let's Chat</BubbleLink>
        </div>
      </div>
    </section>
  </SkewWrapper>
);

export default Extra;
