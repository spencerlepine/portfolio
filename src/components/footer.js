import React from 'react';
import { Icon } from '@components/icons';
import { socialMedia, sourceRepository } from '@config';

const Footer = () => (
  <footer className="min-w-full relative px-3 py-1 bg-coolGray-600 text-gray-400 grid justify-items-start md:block">
    {/* <div className="text-gray-400 mx-20 max-w-md"> */}
    <a href={sourceRepository} className="no-underline float-left">
      <div className="w-full whitespace-nowrap p-2 md:p-4">
        <p className="text-gray-400 p-1">&copy; 2021. Spencer Lepine</p>
      </div>
    </a>

    <div className="row-start-1 justify-start float-left md:float-right flex items-center p-2 md:p-4">
      {socialMedia.map((social, i) => (
        <a href={social.url} className="" key={i}>
          <Icon name={social.name} customClass="inline m-1"></Icon>
        </a>
      ))}
    </div>
    {/* </div> */}
  </footer >
);

export default Footer;
