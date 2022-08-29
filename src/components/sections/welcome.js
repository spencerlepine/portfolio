import React from 'react';
import { Emoji } from '@components';
import { Link } from 'gatsby';
import { socialMedia } from '@config';
import { Icon } from '@components/icons';
import { StaticImage } from 'gatsby-plugin-image';

const Welcome = () => (
  <section>
    <div>
      <span>
        <h1 ><Emoji symbol='👋' />{' '}Hello, I'm</h1>
        <h2>,</h2>
        <h5>a Front End</h5>
        <h1 >Software Engineer</h1>
      </span >

      <hr />

      <div>
        <Link
          to={'/#contact'}
        >
          GET IN TOUCH
        </Link>

        <Link
          to={'/portfolio'}
        >
          VIEW PORTFOLIO
        </Link>
      </div>
    </div >
    <div>
      <div>
        <StaticImage

          src="../../images/me.jpg"
          width={500}
          quality={95}
          formats={['AUTO', 'WEBP', 'AVIF']}
          alt="Spencer Lepine Headshot Profile"
        />
      </div>

      <div>
        {socialMedia.map((social, i) => (
          <a href={social.url} key={i}>
            <Icon name={social.name} customClass="inline m-1 mx-3 text-blue-400 transform transition duration-500 hover:scale-125"></Icon>
          </a>
        ))}
      </div>
    </div>
  </section >
);

export default Welcome;
