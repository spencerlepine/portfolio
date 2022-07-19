import React from 'react';
import { Emoji } from '@components';
import { Link } from 'gatsby';
import { socialMedia } from '@config';
import { Icon } from '@components/icons';
import { StaticImage } from 'gatsby-plugin-image';

const Welcome = () => (
  <section className="landing-section grid auto-cols-auto md:grid-cols-2">
    <div>

      <span className="text-center p-1">
        <h1 className="text-3xl"><Emoji symbol='👋' />{' '}Hello, I'm</h1>
        <h2 className="text-3xl font-bold text-navy-medium">Spencer Lepine<span className="opacity-0">,</span></h2>
        <h5 className="text-2xl text-gray-400">a Full Stack</h5>
        <h1 className="text-3xl"> <span className="text-purple-900 relative mb-16">Software Engineer</span></h1>
      </span>

      <hr className="max-w-sm m-auto w-64" />

      <div className="m-auto flex items-center w-fit-content p-2 md:p-4 text-blue-300">
        <Link
          to={'/#contact'}
          className="get-in-touch no-underline text-white px-3 py-2 bg-red-700 m-1">
          GET IN TOUCH
        </Link>

        <Link
          to={'/portfolio'}
          className="resume-button no-underline text-white px-3 py-2 bg-red-700 m-1">
          VIEW PORTFOLIO
        </Link>
      </div>
    </div>
    <div className="has-text-centered">
      <div className="m-auto w-min">
        <StaticImage
          className="w-60 align-middle m-auto my-4"
          src="../../images/me.jpg"
          width={500}
          quality={95}
          formats={['AUTO', 'WEBP', 'AVIF']}
          alt="Spencer Lepine Headshot Profile"
        />
      </div>

      <div className="m-auto w-max">
        {socialMedia.map((social, i) => (
          <a href={social.url} className="" key={i}>
            <Icon name={social.name} customClass="inline m-1 mx-3 text-purple-400 transform transition duration-500 hover:scale-125"></Icon>
          </a>
        ))}
      </div>
    </div>
  </section >
);

export default Welcome;
