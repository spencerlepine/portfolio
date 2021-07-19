import React from 'react';
import { Icon } from '@components/icons';
import { socialMedia } from '@config';

const Footer = () => (
  <footer>
    {/* <div className="w-full">
      <ul className="w-min whitespace-nowrap inline-block m-auto">
        {socialMedia &&
          socialMedia.map(({ name, url }, i) => (
            <li key={i}>
              <a href={url} aria-label={name}>
                <Icon name={name} />
              </a>
            </li>
          ))}
      </ul>
    </div> */}

    <div>
      <a href="https://github.com/spencerlepine/portfolio-site">
        <div className="w-min whitespace-nowrap m-auto pb-4">Created by Spencer Lepine</div>
      </a>
    </div>
  </footer >
);

export default Footer;
