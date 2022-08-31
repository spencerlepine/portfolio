import React from 'react';
import { Link } from 'gatsby';
import { Icon } from '@components/icons';
import { socialMedia, sourceRepository, navLinks } from '@config';

const FooterComponent = () => (
  <footer>
    <p>Made by Spencer Lepine</p>
    <p><a href={sourceRepository}>Source Code</a></p>

    {socialMedia.map(social => (
      <a href={social.url} key={social.name}>
        <Icon name={social.name}></Icon>
      </a>
    ))}

    {navLinks.map(({ url, name }) => (
      <Link key={name} to={url}>
        {name}
      </Link>
    ))}
  </footer>
);

export default FooterComponent;
