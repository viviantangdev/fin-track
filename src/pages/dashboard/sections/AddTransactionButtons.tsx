import React from 'react';
import { IoAdd } from 'react-icons/io5';
import Button from '../../../components/Button/Button';

const AddTransactionsButtons: React.FC = () => {
  return (
    <section className='flex py-5 gap-2 items-center justify-end'>
      <Button
        label='New Income'
        icon={<IoAdd />}
        onClick={() => console.log('clicked')}
      />
      <Button
        label='New Expense'
        icon={<IoAdd />}
        onClick={() => console.log('clicked')}
      />
    </section>
  );
};

export default AddTransactionsButtons;
