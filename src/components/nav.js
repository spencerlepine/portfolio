import React from 'react';
import { Link } from 'gatsby';
import { navLinks } from '@config';
import { Menu } from '@components';
import { IconLogo } from '@components/icons';

const Nav = () => {
  const Logo = (
    <div className="w-auto relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start" tabIndex="-1">
      <Link to="/" className="text-sm font-bold leading-relaxed inline-block whitespace-nowrap uppercase text-white w-auto">
        <IconLogo customClass="w-16 h-16" />
      </Link>
    </div>
  );

  // const ResumeLink = (
  //   <a className="resume-button" href="/resume.pdf" target="_blank" rel="noopener noreferrer">
  //     <h3 className="text-white px-3 py-2 bg-red-700">Resume</h3>
  //   </a>
  // );

  return (
    <header>
      <nav className="relative flex flex-wrap items-center justify-between px-3 py-1 bg-coolGray-600 mb-3">
        {Logo}

        <div className="hidden ml-auto md:flex w-auto container px-4 flex-wrap content-end justify-between">
          <ol className="flex flex-row list-none ml-auto">
            {navLinks && (
              <>
                {navLinks.map(({ url, name }, i) => (
                  <li key={i}>
                    <Link
                      className="text-lg px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                      to={url}>
                      {name}
                    </Link>
                  </li>
                ))}

                {/* <li className="text-lg px-3 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">
                  {ResumeLink}
                </li> */}
              </>
            )}
          </ol>
        </div>

        <Menu />
      </nav>
    </header>
  );
};

export default Nav;
