import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HiOutlineBars3, HiXMark } from 'react-icons/hi2';

const Navbar: React.FC = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    console.log(isMobileMenuOpen);
  };

  return (
    <>
      <button onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? <HiXMark /> : <HiOutlineBars3 />}
      </button>
      <nav>
        <ul className='flex space-x-5'>
          <li>
            <Link
              to='/'
              className={`nav-link ${
                location.pathname === '/' ? 'active' : ''
              }`}
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
    </>
  );
};

export default Navbar;
