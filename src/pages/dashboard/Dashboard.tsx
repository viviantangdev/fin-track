import React from 'react';
import AddTransactions from './sections/AddTransactions';
import Overview from './sections/Overview';
import History from './sections/History';

const Dashboard: React.FC = () => {
  return (
    <main>
      <AddTransactions />
      <Overview />
      <History/>
    </main>
  );
};

export default Dashboard;
