import React from 'react';
import { Link } from 'gatsby';
import { navLinks } from '@config';
import { Menu } from '@components';
import { IconLogo } from '@components/icons';

const Nav = () => {
  const Logo = (
    <div>
      <Link to="/" >
        <IconLogo />
      </Link>
    </div>
  );

  // const ResumeLink = (
  //   <a >
  //     <h3 >Resume</h3>
  //   </a>
  // );

  return (
    <header>
      <nav >
        {Logo}

        <div>
          <ol >
            {navLinks && (
              <>
                {navLinks.map(({ url, name }, i) => (
                  <li key={i}>
                    <Link

                      to={url}>
                      {name}
                    </Link>
                  </li>
                ))}

                {/* <li >
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
