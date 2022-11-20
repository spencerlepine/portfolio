import React, { Suspense } from 'react';
import { Emoji } from '@components';
import { Icon } from '@components/icons';
import { socialMedia } from '@config';
import { StaticImage } from 'gatsby-plugin-image';
import BubbleLink from '@styles/bubbleLink';
import LandingSection from '@styles/landingSection';

const Welcome = () => (
  <LandingSection id="welcome">
    <div className="mx-auto max-w-6xl xs:py-4 sm:py-4">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2">
        <div className="mx-auto text-left flex flex-col max-w-sm mb-5">
          <div>
            <p className="text-4xl my-0 text-xl font-semibold text-title-text"><Emoji symbol='👋' />{' '}Hello!</p>
            <p className="text-4xl  my-1 font-semibold text-title-text">I'm Spencer Lepine</p>
            <p className="text-4xl my-0 mb-4 bg-gray-800 text-green-400 font-normal font-sans pl-4 pr-8 rounded-md">
              <span className="text-gray-600 select-none">$</span> Software Engineer
            </p>
          </div>
          <div className="mx-auto sm:flex">
            <div className="my-8 sm:my-0">
              <BubbleLink linkPath='/portfolio' color="brand" isLarger hasMargin>View Portfolio</BubbleLink>
            </div>
            <div className="my-5 sm:my-0">
              <BubbleLink linkPath='/contact' isOutlined color="brand" isLarger>Get In Touch</BubbleLink>
            </div>
          </div>
        </div>

        <div className="mx-auto text-center flex flex-col max-w-sm">
          <Suspense fallback={<div>Loading...</div>}>
            <div className="">
              <StaticImage
                src="../../assets/images/me.png"
                // width={280}
                className="flex justify-center max-w-full h-auto m-1 rounded-full border-8 border-solid border-gray-200"
                style={{ borderRadius: '50%' }}
                quality={90}
                formats={['AUTO', 'WEBP', 'AVIF']}
                alt="Spencer Lepine Headshot Profile"
              />
            </div>
          </Suspense>

          <div className="flex mx-auto">
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
