import React from 'react';
import ThemeToggler from '../utils/ThemeToggler';
import Navbar from '../utils/Navbar';

const Header: React.FC = () => {
  return (
    <header className='flex justify-between items-center p-4'>
      <h1 className='text-xl font-bold'>FinTrack</h1>
      <Navbar />
      <ThemeToggler />
    </header>
  );
};

export default Header;
