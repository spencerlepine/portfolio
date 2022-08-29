import React from 'react';
import { Icon } from '@components/icons';
import { socialMedia, sourceRepository } from '@config';

const Footer = () => (
  <footer>
    <p><a href={sourceRepository}>Built by Spencer Lepine</a></p>

    <div>
      {socialMedia.map((social, i) => (
        <a href={social.url} key={i}>
          <Icon name={social.name}></Icon>
        </a>
      ))}
    </div>
  </footer >
);

export default Footer;
