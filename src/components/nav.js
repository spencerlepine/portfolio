import React from 'react';
import { Link } from 'gatsby';
import { navLinks } from '@config';
// import { Menu } from '@components';
import { Icon } from '@components/icons';
import { Header as GrommetHeader, Heading } from 'grommet';

const Nav = () => (
  <GrommetHeader background="brand" justify="center">
    <Heading level={5} margin="none">
      <Link to="/" ><Icon name="Logo" color='plain' size='xlarge' /></Link>
      {/* <Menu />  TODO */}
    </Heading>

    {navLinks.map(({ url, name }) => (
      <Heading level={3} size="medium" key={name}>
        <Link
          key={name}
          to={url}>
          {name}
        </Link>
      </Heading>
    ))}
  </GrommetHeader>
);

export default Nav;
