import React from 'react';
import { Link } from 'gatsby';
import { navLinks } from '@config';
// import { Menu } from '@components';
import { Icon } from '@components/icons';
import { Header as GrommetHeader, Heading } from 'grommet';

const Nav = () => (
  <GrommetHeader background="brand" justify="center">
    <Heading>
      <Link to="/" ><Icon name="Logo" color='plain' size='xlarge' /></Link>

      {navLinks.map(({ url, name }) => (
        <Link
          key={name}
          to={url}>
          {name}
        </Link>
      ))}

      {/* <Menu />  TODO */}
    </Heading>
  </GrommetHeader>
);

export default Nav;
