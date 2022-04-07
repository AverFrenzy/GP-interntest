import React from 'react';

import './index.css';


export const Loader = () => {
  return (
    <div className='loader-container'>
      <div className='loader-circle'></div>
      <span className='loader-text'>Waiting...</span>
    </div>
  );
};
