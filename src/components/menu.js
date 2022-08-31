import React, { useState, useRef } from 'react';
import { Link } from 'gatsby';
import { navLinks } from '@config';
import { Icon } from '@components/icons';
import { useOnClickOutside } from '@hooks';

const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const buttonRef = useRef(null);


  const toggleMenu = () => {
    if (menuOpen) {
      buttonRef.current.className = '';
    } else {
      buttonRef.current.className = 'hidden';
    }
    setMenuOpen(!menuOpen);
  };

  const navRef = useRef(null);

  const wrapperRef = useRef();
  useOnClickOutside(wrapperRef, () => {
    setMenuOpen(false);
    buttonRef.current.className = '';
  });

  return (
    <div>
      <div ref={wrapperRef} >
        <button
          onClick={toggleMenu}
          ref={buttonRef}>
          <div>
            <Icon name="Hamburger" />
          </div>
        </button>

        <aside>
          <nav ref={navRef} >
            {navLinks && (
              <ol >
                {navLinks.map(({ url, name }, i) => (
                  <li key={i}>
                    <Link to={url} onClick={toggleMenu}>
                      {name}
                    </Link>
                  </li>
                ))}
              </ol>
            )}
          </nav>
        </aside>
      </div>
    </div>
  );
};

export default Menu;
