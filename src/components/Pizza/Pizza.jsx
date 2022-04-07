import React from 'react';

import './index.css';
import { usePartyContext } from '../contexts/PartyContext';


export const Pizza = () => {
  const { partyInfo } = usePartyContext();

  const eatersOfPizzaNumber = partyInfo.filter(person => person.isEatsPizza).length;

  const renderCuts = () => {
    const angleShift = 360 / eatersOfPizzaNumber;
    const cutsNumber = eatersOfPizzaNumber / 2;
    const cuts = [];
    let cuttingPoint = 0;

    for (let i = 0; i < cutsNumber; i++) {
      cuts.push(<span key={ i + 'slice' } className='pizza-cut'
                      style={ { transform: `rotate(${ cuttingPoint }deg)` } } />);
      cuttingPoint += angleShift;
    }

    return cuts;
  };

  return (
    <div className='pizza-circle'>
      { renderCuts() }
    </div>
  );
};
