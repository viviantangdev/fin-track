import React from 'react';

interface CardProps {
  label: string;
  icon: React.ReactNode;
  value: number;
  bgColor: string;
}

const Card: React.FC<CardProps> = ({ label, icon, value , bgColor}) => {
  return (
    <div className='inline-flex items-center justify-start gap-3 bg-custom-background-secondary py-4 px-6 rounded-md shadow-md'>
      <div className={`${bgColor} p-3 rounded-md`}>
        {icon}
      </div>
      <div className='flex flex-col'>
        <span>{label}</span>
        <span className='text-lg font-bold'>{`${value} $`}</span>
      </div>
    </div>
  );
};

export default Card;
