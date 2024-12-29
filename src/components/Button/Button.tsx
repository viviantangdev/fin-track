import React from 'react';
import './Button.css';

interface ButtonProps {
  label: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  icon,
  iconPosition = 'left',
}) => {
  return (
    <button className='button' onClick={onClick}>
      {icon && iconPosition === 'left' && <span className='icon'>{icon}</span>}
      <span>{label}</span>
      {icon && iconPosition === 'right' && (
        <span className='icon'>{icon}</span>
      )}{' '}
    </button>
  );
};

export default Button;
