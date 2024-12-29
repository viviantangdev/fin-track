import React from 'react';
import './Card.css';

interface CardProps {
  label: string;
  icon: React.ReactNode;
  value: number;
  bgColor: string;
}

const Card: React.FC<CardProps> = ({ label, icon, value , bgColor}) => {
  return (
    <div className='card'>
      <div className={`${bgColor} cardIcon`}>
        {icon}
      </div>
      <div className='cardContent'>
        <span>{label}</span>
        <span>{`${value} $`}</span>
      </div>
    </div>
  );
};

export default Card;
