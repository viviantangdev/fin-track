import React from 'react';
import AddTransactions from './sections/AddTransactions';
import Overview from './sections/Overview';
import History from './sections/History';
import PageHeader from '../../components/PageHeader/PageHeader';

const Dashboard: React.FC = () => {
  return (
    <main>
      <div className='flex items-center justify-between'>
        <PageHeader title={'Dashboard'} description={'Welcome to your finaincal dashboard.'}/>
        <AddTransactions />
      </div>
      <Overview />
      <History/>
    </main>
  );
};

export default Dashboard;
