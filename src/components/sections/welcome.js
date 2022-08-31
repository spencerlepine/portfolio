import React from 'react';
import { Emoji } from '@components';
import { socialMedia } from '@config';
import { Icon } from '@components/icons';
import { StaticImage } from 'gatsby-plugin-image';
import BubbleLink from '@styles/bubbleLink';
import LandingSection from '@styles/landingSection';

const Welcome = () => (
  <LandingSection id="welcome">
    <div className="flex text-center mx-auto max-w-6xl py-20">
      <div className="flex mx-auto">
        <div className="pr-10 max-w-md w-fit text-left my-auto mx-10">
          <h1 className="my-2 font-semibold text-title-text"><Emoji symbol='👋' />{' '}Hello!</h1>
          <h1 className="my-2 font-semibold text-title-text">I'm Spencer Lepine</h1>
          <h1 className="mt-4 mb-8 bg-gray-800 text-green-400 font-normal font-sans pl-4 pr-8 py-2 rounded-md"><span className="text-gray-600 select-none">$</span> Software Engineer_</h1>{/* TODO */}
          <BubbleLink linkPath='/portfolio' color="brand" isLarger hasMargin>View Portfolio</BubbleLink>
          <BubbleLink linkPath='#contact' isOutlined color="brand" isLarger>Get In Touch</BubbleLink>
        </div>

        <div className="mx-10">
          <div className="mx-auto w-fit max-w-xs">
            <StaticImage
              src="../../images/me.jpg"
              width={280}
              className="flex justify-center max-w-full h-auto m-1 rounded-full border-8 border-solid border-gray-200"
              quality={90}
              formats={['AUTO', 'WEBP', 'AVIF']}
              alt="Spencer Lepine Headshot Profile"
            />
          </div>

          <div className="flex mx-auto w-fit justify-center m-2">
            {socialMedia.map((social, i) => (
              <a href={social.url} key={i}>
                <Icon name={social.name} customClass="h-8 text-title-text mx-1"></Icon>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  </LandingSection>
);

export default Welcome;
