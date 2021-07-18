import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import { navLinks } from '@config';
import { Menu } from '@components';
import { IconLogo } from '@components/icons';

const Nav = ({ isHome }) => {
  const Logo = (
    <div className="logo" tabIndex="-1">
      {isHome ? (
        <a href="/" aria-label="home">
          <IconLogo />
        </a>
      ) : (
        <Link to="/" aria-label="home">
          <IconLogo />
        </Link>
      )}
    </div>
  );

  const ResumeLink = (
    <a className="resume-button" href="/resume.pdf" target="_blank" rel="noopener noreferrer">
      Resume
    </a>
  );

  return (
    <header>
      <nav>
        {Logo}

        <div>
          <ol>
            {navLinks &&
              navLinks.map(({ url, name }, i) => (
                <li key={i}>
                  <Link to={url}>{name}</Link>
                </li>
              ))}
          </ol>
          <div>{ResumeLink}</div>
        </div>

        <Menu />
      </nav>
    </header>
  );
};

Nav.propTypes = {
  isHome: PropTypes.bool,
};

export default Nav;
