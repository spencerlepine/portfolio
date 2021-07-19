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

      <div ref={wrapperRef} className="md:hidden">
        <button
          onClick={toggleMenu}
          ref={buttonRef}>
          <div className="ham-box">
            <Icon name="Hamburger" customClass="text-white" />
          </div>
        </button>

        <aside className={menuOpen ? '' : 'hidden'}>
          <nav ref={navRef} className="fixed top-0 right-0 bg-coolGray-600 z-50 h-screen border-l-solid border-l-8 border-l-navy-dark">
            {navLinks && (
              <ol className="m-4 p-6 z-50 mr-10 w-60">
                {navLinks.map(({ url, name, emoji }, i) => (
                  <li key={i}>
                    <Link to={url} onClick={toggleMenu}>
                      <p className="text-white p-2 text-2xl my-2">
                        <Emoji symbol={emoji} />{'  '}
                        {name}
                      </p>
                    </Link>
                  </li>
                ))}
              </ol>
            )}

            {/* <a href="/resume.pdf" className="resume-link">
              Resume
            </a> */}
          </nav>
        </aside>
      </div>
    </div>
  );
};

export default Menu;
