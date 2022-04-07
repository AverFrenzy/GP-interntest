import React, { useEffect } from 'react';
import { Loader } from './components';
import { usePartyContext } from './components/contexts/PartyContext';
import Dashboard from './components/Dashboard/Dashboard';


const App = () => {
  const { isLoading, fetchData, partyInfo } = usePartyContext();

  useEffect(() => {
    fetchData()
  },[])
  return (
    <div className='container'>
      {isLoading && <Loader/>}
      { (!!partyInfo.length && !isLoading) && <Dashboard /> }
    </div>
  );
};

export default App;
