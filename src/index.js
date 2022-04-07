import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import { PartyContextProvider } from './components/contexts/PartyContext';


ReactDOM.render(
  <PartyContextProvider>
    <App />
  </PartyContextProvider>,
  document.getElementById('root')
);
