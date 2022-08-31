import React from 'react';
import { Link } from 'gatsby';
import { Icon } from '@components/icons';
import { socialMedia, sourceRepository, navLinks } from '@config';

const FooterComponent = () => (
  <header className="bg-tertiary text-secondary-text h-48 flex w-full">
    <div className="max-w-5xl w-full flex mx-auto">
      <div className="float-left">
        <p>Made by Spencer Lepine</p>
        <p><a href={sourceRepository}>Source Code</a></p>
      </div>

      <div className="ml-auto">
        {socialMedia.map(social => (
          <a href={social.url} key={social.name}>
            <Icon name={social.name} customClass="h-8 mx-1 inline my-auto"></Icon>
          </a>
        ))}

        {navLinks.map(({ url, name }) => (
          <Link key={name} to={url}>
            {name}
          </Link>
        ))}
      </div>
    </div>
  </header>
);

export default FooterComponent;
