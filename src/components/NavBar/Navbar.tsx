import React, { useState, useEffect } from 'react';
import './NavBar.css';
import { Link, useLocation } from 'react-router-dom';
import { HiOutlineBars3, HiXMark } from 'react-icons/hi2';

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
    <nav className='md:relative'>
      {/* Hamburger Menu */}
      <div className='md:hidden flex justify-end'>
        <button
          onClick={toggleNavbar}
          className='text-custom-text-primary focus:outline-none'
          aria-label='Toggle navigation'
        >
          {isNavOpen ? <HiXMark size={24} /> : <HiOutlineBars3 size={24} />}
        </button>
      </div>

      {/* Navigation Links */}
      <ul
        className={`absolute top-full right-0 w-full bg-custom-background-secondary md:bg-transparent py-5 pr-5 space-y-5 md:static md:flex md:space-y-0 md:space-x-5 md:py-0 md:pr-0 md:justify-end transform transition-all duration-300 ease-in-out ${
          isNavOpen
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 -translate-y-5 pointer-events-none'
        } text-right md:text-left md:opacity-100 md:translate-y-0 md:block`}
      >
        <li className='ml-auto md:ml-0'>
          <Link
            to='/'
            className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
          >
            Dashboard
          </Link>
        </li>
        <li className='ml-auto md:ml-0'>
          <Link
            to='/transactions'
            className={`nav-link ${
              location.pathname === '/transactions' ? 'active' : ''
            }`}
          >
            Transactions
          </Link>
        </li>
        <li className='ml-auto md:ml-0'>
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
