import React from 'react';
import { Emoji } from '@components';
import { socialMedia } from '@config';
import { Icon } from '@components/icons';
import { StaticImage } from 'gatsby-plugin-image';
import BubbleLink from '@styles/bubbleLink';

const Welcome = () => (
  <section className="min-w-full">
    <div className="mx-auto w-fit">
      <div className="flex flex-row">
        <div className="text-tertiary bg-red-100 max-w-md w-fit">
          <h1><Emoji symbol='👋' />{' '}Hello!</h1>
          <h2>I'm Spencer Lepine</h2>
          <p>$ Software Engineer</p>{/* TODO */}
          <BubbleLink linkPath='/portfolio' color="brand">View Portfolio</BubbleLink>
          <BubbleLink linkPath='#contact' isOutlined color="brand">Get In Touch</BubbleLink>
        </div>

        <div>
          <div className="mx-auto w-fit max-w-xs">
            <StaticImage
              src="../../images/me.jpg"
              width={280}
              className="flex justify-center max-w-full h-auto m-1 rounded-full border-8 border-solid border-text-primary"
              quality={90}
              formats={['AUTO', 'WEBP', 'AVIF']}
              alt="Spencer Lepine Headshot Profile"
            />
          </div>

          <div className="flex mx-auto w-fit justify-center m-2">
            {socialMedia.map((social, i) => (
              <a href={social.url} key={i}>
                <Icon name={social.name} customClass="h-8 text-tertiary mx-1"></Icon>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section >
);

export default Welcome;
