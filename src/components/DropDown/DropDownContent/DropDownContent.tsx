import React from 'react';
import './DropDownContent.css';
import DropDownItem from '../DropDownItem/DropDownItem';

interface DropDownContentProps {
  items: string[];
  onItemClick: (item: string) => void;
}

const DropDownContent: React.FC<DropDownContentProps> = ({ items , onItemClick}) => {
  return (
    <div className='dropDownContent'>
      {items.map((item, index) => (
        <DropDownItem
          key={index}
          item={item}
          onClick={() => onItemClick(item)}
        />
      ))}
    </div>
  );
};

export default DropDownContent;
