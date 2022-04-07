import React from 'react';

import './index.css';
import { Table } from '../Table';
import { Pizza } from '../Pizza';
import { TableFeedback } from '../TableFeedback';
import { PercentWidget } from '../PercentWidget';
import { usePartyContext } from '../contexts/PartyContext';


const Dashboard = () => {
  const { percentPaid} = usePartyContext();

  return (
    <>
      <div className='dashboard-container'>
        <div className='dashboard-item'>
          <Table />
        </div>
        <div className='dashboard-item'>
          <TableFeedback />
        </div>
        <div className='dashboard-item'>
          <div className='dashboard-statistic-item'>
            <Pizza />
          </div>
          <div className='dashboard-statistic-item'>
            <PercentWidget value={percentPaid} />
          </div>
          <div className='dashboard-statistic-item'>
            <PercentWidget value={percentPaid} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;