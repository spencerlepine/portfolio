import React from 'react';
import { Icon } from '@components/icons';
import { socialMedia } from '@config';

const Footer = () => (
  <footer>
    <div>
      <ul>
        {socialMedia &&
          socialMedia.map(({ name, url }, i) => (
            <li key={i}>
              <a href={url} aria-label={name}>
                <Icon name={name} />
              </a>
            </li>
          ))}
      </ul>
    </div>

    <div>
      <a href="https://github.com/spencerlepine/portfolio-site">
        <div>Created by Spencer Lepine</div>
      </a>
    </div>
  </footer>
);

export default Footer;
