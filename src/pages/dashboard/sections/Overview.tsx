import React from 'react';
import { FaArrowTrendUp, FaArrowTrendDown } from 'react-icons/fa6';
import { FaBalanceScale } from 'react-icons/fa';
import Card from '../../../components/utils/Card';

const Overview: React.FC = () => {
    return (
      <section className=' space-y-5 py-10'>
        <h2>Overview</h2>
        <div className='grid grid-cols-3 gap-3'>
          <Card
            icon={<FaArrowTrendUp size={24} className='text-custom-income' />}
            label='Income'
            value={40}
            bgColor='bg-custom-income/20'
          />
          <Card
            icon={<FaArrowTrendDown size={24} className='text-custom-expense' />}
            label='Expense'
            value={40}
            bgColor='bg-custom-expense/20'
          />
          <Card
            icon={<FaBalanceScale size={24} className='text-custom-accent' />}
            label='Balance'
            value={40}
            bgColor='bg-custom-accent/20'
          />
        </div>
      </section>
    );
  };

  export default Overview;