import React from 'react';
import { Link } from 'gatsby';
import { Icon } from '@components/icons';
import { socialMedia, sourceRepository, navLinks } from '@config';

const FooterComponent = () => (
  <footer className="bg-tertiary text-tertiary-text flex w-full p-4">
    <div className="max-w-5xl w-full flex mx-auto my-4">
      <div className="float-left pl-4">
        <p>Built with <svg alt="love" className="inline text-red-700" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 4.248c-3.148-5.402-12-3.825-12 2.944 0 4.661 5.571 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-6.792-8.875-8.306-12-2.944z" /></svg> by Spencer Lepine</p>
        <p className=" w-fit rounded-lg border-gray-700 border-2 mt-2 px-3 py-1 hover:bg-gray-700" style={{ width: 'fit-content' }}><a target="_blank" href={sourceRepository} className="" rel="noreferrer"><Icon name="GitHub" customClass="w-4 h-4 inline my-auto mb-1"></Icon> Source Code</a></p>
      </div>

      <div className="ml-auto pr-4">
        {socialMedia.map(social => (
          <a href={social.url} key={social.name}>
            <Icon name={social.name} customClass="h-8 mx-1 inline my-auto"></Icon>
          </a>
        ))}

        <div className="grid text-right py-4">
          {navLinks.map(({ url, name }) => (
            <div className="inline py-0.5" key={name} >
              <Link to={url}>
                {name}
              </Link>
            </div>
          ))}
          <div className="inline">
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
