import React from 'react';
import { Emoji } from '@components';
import { Link } from 'gatsby';
import { socialMedia } from '@config';
import { Icon } from '@components/icons';
import { StaticImage } from 'gatsby-plugin-image';

const Welcome = () => (
  <section>
    <div>
      <h1 ><Emoji symbol='👋' />{' '}Hello!</h1>
      <h2>I'm Spencer Lepine</h2>
      <p>$ Software Engineer</p>{/* TODO */}
      <Link to={'/portfolio'} >View Portfolio</Link>
      <Link to={'/#contact'}>Get In Touch</Link>
    </div>

    <div>
      <StaticImage
        src="../../images/me.jpg"
        // width={500}
        quality={90}
        formats={['AUTO', 'WEBP', 'AVIF']}
        alt="Spencer Lepine Headshot Profile"
      />

      <div>
        {socialMedia.map((social, i) => (
          <a href={social.url} key={i}>
            <Icon name={social.name}></Icon>
          </a>
        ))}
      </div>
    </div>
  </section >
);

export default Welcome;
