import React from 'react';
import { Icon } from '@components/icons';
import { socialMedia, sourceRepository } from '@config';

const FooterComponent = () => (
  <footer>
    <p>Built by Spencer Lepine</p>
    <p><a href={sourceRepository}>Source Code</a></p>
    {socialMedia.map(social => (
      <a href={social.url} key={social.name}>
        <Icon name={social.name}></Icon>
      </a>
    ))}
  </footer>
);

export default FooterComponent;
