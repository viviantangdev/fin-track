import React from 'react';
import './Header.css';
import Navbar from '../NavBar/Navbar';
import ThemeToggler from '../ThemeToggle/ThemeToggler';

const Header: React.FC = () => {
  return (
    <header>
      <h1>FinTrack</h1>
      <div className='flex space-x-5'>
        <Navbar />
        <ThemeToggler/>
      </div>
    </header>
  );
};

export default Header;
