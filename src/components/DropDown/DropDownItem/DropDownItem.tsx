import React from 'react';
import './DropDownItem.css';

interface DropDownItemProps {
    item: string;
    onClick: () => void;
}

const DropDownItem: React.FC<DropDownItemProps> = ({item, onClick}) => {
  return (
    <div className='dropDownItem' onClick={onClick}>{item}</div>
)
}

export default DropDownItem