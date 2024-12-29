import React, { useState, useEffect } from 'react';
import './NavBar.css';
import { Link, useLocation } from 'react-router-dom';
import { HiOutlineBars3, HiXMark } from 'react-icons/hi2';
import Button from '../Button/Button';

const Navbar: React.FC = () => {
  const location = useLocation();
  const [isNavOpen, setIsNavOpen] = useState(false);

  // Handle screen resize and reset isNavOpen for large screens
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsNavOpen(true);
      } else {
        setIsNavOpen(false);
      }
    };
    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleNavbar = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav>
      {/* Hamburger Menu */}
      <div className='menuButton'>
        <Button
          onClick={toggleNavbar}
          ariaLabel='Toggle navigation'
          icon={
            isNavOpen ? <HiXMark size={24} /> : <HiOutlineBars3 size={24} />
          }
          iconPosition='center'
        ></Button>
      </div>

      {/* Navigation Links */}
      <ul
        className={`${
          isNavOpen
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 -translate-y-5 pointer-events-none'
        }`}
      >
        <li>
          <Link
            to='/'
            className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
          >
            Dashboard
          </Link>
        </li>
        <li>
          <Link
            to='/transactions'
            className={`nav-link ${
              location.pathname === '/transactions' ? 'active' : ''
            }`}
          >
            Transactions
          </Link>
        </li>
        <li>
          <Link
            to='/settings'
            className={`nav-link ${
              location.pathname === '/settings' ? 'active' : ''
            }`}
          >
            Settings
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
