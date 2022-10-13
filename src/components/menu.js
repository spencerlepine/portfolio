import React, { useState, useRef } from 'react';
import { Link } from 'gatsby';
import { navLinks } from '@config';
import { Icon } from '@components/icons';
import { useOnClickOutside } from '@hooks';

const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const wrapperRef = useRef(null);
  useOnClickOutside(wrapperRef, () => {
    setMenuOpen(false);
  });

  return (
    <div className="my-auto mx-4 md:hidden">
      <div ref={wrapperRef}>
        <div className="flex items-center my-auto">
          <button className="outline-none mobile-menu-button" onClick={toggleMenu}>
            <Icon name="Hamburger" customClass="w-8 h-8 my-auto" />
          </button>
        </div>

        {menuOpen && (
          <aside className="absolute top-0 left-0 w-full">
            <nav className="p-4 w-full bg-tertiary">
              <div className="absolute right-0 top-0 p-4">
                <button className="outline-none mobile-menu-button" onClick={toggleMenu}>
                  <Icon name="Close" customClass="w-8 h-8 my-auto" />
                </button>
              </div>

              {navLinks && (
                <ol className="pt-10 text-center">
                  <li className="py-2 hover:bg-secondary">
                    <Link to="/" onClick={toggleMenu}>
                      Home
                    </Link>
                  </li>
                  {navLinks.map(({ url, name }, i) => (
                    <li key={i} className="py-2 hover:bg-secondary">
                      <Link to={url} onClick={toggleMenu}>
                        {name}
                      </Link>
                    </li>
                  ))}
                </ol>
              )}


            </nav>
          </aside>
        )}
      </div>
    </div>
  );
};

export default Menu;
