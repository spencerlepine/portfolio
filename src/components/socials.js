import React from 'react';
import { socialMedia } from '@config';
import { Icon } from '@components/icons';

const Socials = () => (
  <aside className="fixed bg-white rounded-lg border-solid border-4 border-coolGray-300 right-0 mr-3 bottom-3 lg:right-3 lg:mr-0 lg:bg-transparent">
    {socialMedia &&
      socialMedia.map(({ url, name }, i) => (
        <div key={i} className="w-auto relative -top-1/4 inline-block lg:block" tabIndex="-1">
          <a href={url} className="m-3 text-sm font-bold leading-relaxed inline-block whitespace-nowrap uppercase text-white w-auto">
            <Icon name={name} customClass="w-16 h-16 text-navy-medium md:inline-block" />
          </a>
        </div>
      ))}
  </aside>
);

export default Socials;
