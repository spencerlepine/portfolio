import React from 'react';
import { Link } from 'gatsby';
import { navLinks } from '@config';
// import { Menu } from '@components';
import { Icon } from '@components/icons';
import ThemeToggleBtn from '@components/themeToggleBtn';

const Nav = () => (
  <header className="bg-tertiary text-primary uppercase h-16 flex w-full">
    <div className="max-w-5xl w-full flex mx-auto">
      <div className="w-16 my-auto mx-0">
        <Link to="/" ><Icon name="Logo" customClass="max-w-full h-auto m-1" /></Link>
      </div>

      {/* <Menu />  TODO */}

      <div className="ml-auto mr-4 relative my-auto h-fit pt-2">
        <ThemeToggleBtn />
      </div>

      <div className="my-auto">
        {navLinks.map(({ url, name }) => (
          <Link key={name} to={url} className="p-1 font-bold">
            {name}
          </Link>
        ))}
      </div>
    </div>
  </header>
);

export default Nav;
