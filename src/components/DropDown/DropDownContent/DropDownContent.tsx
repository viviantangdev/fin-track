import React from 'react';
import './DropDownContent.css';
import DropDownItem from '../DropDownItem/DropDownItem';

interface Props {
  items: string[];
}

const DropDownContent: React.FC<Props> = ({ items }) => {
  return (
    <div className='dropDownContent'>
      {items.map((item) => (
        <DropDownItem
          key={item}
          item={item}
          onClick={() => console.log(`${item}`)}
        />
      ))}
    </div>
  );
};

export default DropDownContent;
