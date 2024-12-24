import React from 'react';
import ThemeToggler from '../theme/ThemeToggler';

const Header: React.FC = () => {
  return (
    <header className='flex justify-between items-center'>
      <h1>FinTrack</h1>
      <ThemeToggler/>
    </header>
  );
};

export default Header;
