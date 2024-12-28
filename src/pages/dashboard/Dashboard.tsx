import React from 'react';
import AddTransactionsButtons from './sections/AddTransactionButtons';
import Overview from './sections/Overview';
import History from './sections/History';

const Dashboard: React.FC = () => {
  return (
    <main>
      <AddTransactionsButtons />
      <Overview />
      <History/>
    </main>
  );
};

export default Dashboard;
