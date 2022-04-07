import React from 'react';

import './index.css';
import { usePartyContext } from '../../../contexts/PartyContext';


export const PayButton = ({ participantName, isPaid }) => {
  const { pay } = usePartyContext();

  return (
    <button onClick={ () => pay(participantName) }
            disabled={ isPaid }
            className={ isPaid ? 'pay-button pay-button-unactive' : 'pay-button' }>
      { isPaid ? 'PAID' : 'PAY' }
    </button>
  );
};
