import React, { useRef, useState } from 'react';
import Bar from '../../../components/BarChart/BarChart';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa6';
import Button from '../../../components/Button/Button';
import DropDownContent from '../../../components/DropDown/DropDownContent/DropDownContent';
import useClickOutside from '../../../hooks/useClickOutside';

const years: string[] = ['2024', '2025'];

const History: React.FC = () => {
  const [showDropDown, setShowDropDown] = useState<boolean>(false);
  const [selectYear, setSelectYear] = useState<string>(years[0]);

  const dropDownRef = useRef<HTMLDivElement>(null);

  const toggleDropDown = () => {
    setShowDropDown(!showDropDown);
  };

  const handleSelectYear = (year: string) => {
    setSelectYear(year);
    setShowDropDown(false); // Close dropdown after selection
  };

  useClickOutside(dropDownRef as React.RefObject<HTMLElement>, () =>
    setShowDropDown(false)
  );

  return (
    <section className='space-y-5 py-10'>
      <h2>History</h2>
      <div className='space-y-1 max-w-min' ref={dropDownRef}>
        <Button
          label={selectYear}
          icon={showDropDown ? <FaAngleUp /> : <FaAngleDown />}
          iconPosition='right'
          onClick={toggleDropDown}
        />
        {showDropDown && (
          <DropDownContent items={years} onItemClick={handleSelectYear} />
        )}
      </div>
      <div className='bg-custom-background-secondary shadow-md rounded-md p-2'>
        <Bar />
      </div>
    </section>
  );
};

export default History;
