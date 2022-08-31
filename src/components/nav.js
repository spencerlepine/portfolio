import React from 'react';
import { Link } from 'gatsby';
import { navLinks } from '@config';
// import { Menu } from '@components';
import { Icon } from '@components/icons';

const Nav = () => (
  <header>
    <Link to="/" ><Icon name="Logo" color='plain' size='xlarge' /></Link>
    {/* <Menu />  TODO */}

    {navLinks.map(({ url, name }) => (
      <Link key={name} to={url}>
        {name}
      </Link>
    ))}
  </header>
);

export default Nav;
