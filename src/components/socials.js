import React from 'react';
import { socialMedia } from '@config';
import { Icon } from '@components/icons';

const Socials = () => (
  <aside >
    {socialMedia &&
      socialMedia.map(({ url, name }, i) => (
        <div key={i} >
          <a href={url} >
            <Icon name={name} customClass="w-16 h-16 text-navy-medium md:inline-block" />
          </a>
        </div>
      ))}
  </aside>
);

export default Socials;
