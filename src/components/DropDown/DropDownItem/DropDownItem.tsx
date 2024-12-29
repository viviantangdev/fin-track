import React from 'react';
import './DropDownItem.css';

interface Props {
    item: string;
    onClick: () => void;
}

const DropDownItem: React.FC<Props> = ({item, onClick}) => {
  return (
    <div className='dropDownItem' onClick={onClick}>{item}</div>
)
}

export default DropDownItem