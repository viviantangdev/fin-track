import React from 'react';
import Bar from '../../../components/BarChart';

const History: React.FC = () => {
  return (
    <section className='space-y-5 py-10'>
      <h2>History</h2>
      <div>
        Filter
      </div>
      <div className='bg-custom-background-secondary shadow-md rounded-md p-2'>
          <Bar />
      </div>
    </section>
  );
};

export default History;
