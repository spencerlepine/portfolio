import React from 'react';
import { Link } from 'gatsby';
import { Icon } from '@components/icons';
import { socialMedia, sourceRepository, navLinks } from '@config';

const FooterComponent = () => (
  <footer className="bg-tertiary text-tertiary-text h-48 flex w-full">
    <div className="max-w-5xl w-full flex mx-auto my-4">
      <div className="float-left pl-4">
        <p>Made by Spencer Lepine</p>
        <p><a href={sourceRepository} className="underline">Source Code</a></p>
      </div>

      <div className="ml-auto pr-4">
        {socialMedia.map(social => (
          <a href={social.url} key={social.name}>
            <Icon name={social.name} customClass="h-8 mx-1 inline my-auto"></Icon>
          </a>
        ))}

        <div className="grid text-right pt-4">
          {navLinks.map(({ url, name }) => (
            <div className="inline" key={name} >
              <Link to={url}>
                {name}
              </Link>
            </div>
          ))}
          <div className="inline" key={name} >
            <Link to="/">
              Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default FooterComponent;
