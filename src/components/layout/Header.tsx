import React from 'react';
import ThemeToggler from '../utils/ThemeToggler';
import Navbar from '../utils/Navbar';

const Header: React.FC = () => {
  return (
    <header>
      <h1>FinTrack</h1>
      <div className='flex space-x-5'>
        <Navbar />
        <ThemeToggler />
      </div>
    </header>
  );
};

export default Header;
