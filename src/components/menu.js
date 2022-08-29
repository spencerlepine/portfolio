import React, { useState, useRef } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'gatsby';
import { navLinks } from '@config';
import { Icon } from '@components/icons';
import { Emoji } from '@components';
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
      <Helmet>
        <body className={menuOpen ? 'blur' : ''} />
      </Helmet>

      <div ref={wrapperRef} >
        <button
          onClick={toggleMenu}
          ref={buttonRef}>
          <div>
            <Icon name="Hamburger" customClass="text-white" />
          </div>
        </button>

        <aside className={menuOpen ? '' : 'hidden'}>
          <nav ref={navRef} >
            {navLinks && (
              <ol >
                {navLinks.map(({ url, name, emoji }, i) => (
                  <li key={i}>
                    <Link to={url} onClick={toggleMenu}>
                      <p >
                        <Emoji symbol={emoji} />{'  '}
                        {name}
                      </p>
                    </Link>
                  </li>
                ))}
              </ol>
            )}

            {/* <a href="/resume.pdf" >
              Resume
            </a> */}
          </nav>
        </aside>
      </div>
    </div>
  );
};

export default Menu;
