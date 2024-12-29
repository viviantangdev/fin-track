import React from 'react';
import './Button.css';

interface ButtonProps {
  label?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right' | 'center';
  ariaLabel: string;
  buttonClassName?: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  icon,
  iconPosition = 'left',
  ariaLabel,
  buttonClassName,
}) => {
  return (
    <button
      className={`${buttonClassName} button`}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {icon && iconPosition === 'left' && <span className='icon'>{icon}</span>}
      {label && <span>{label}</span>}
      {icon && iconPosition === 'center' && (
        <span className='icon'>{icon}</span>
      )}
      {icon && iconPosition === 'right' && <span className='icon'>{icon}</span>}{' '}
    </button>
  );
};

export default Button;
