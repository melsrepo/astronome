import React from 'react';
import { useLocation } from 'react-router-dom';

  function Result() {
    const { state } = useLocation();
  
    return (
      <div>
        <h2>Your result is </h2> 
        <div>
          <p>{state.signState}</p>
        </div>
      </div>
    );
  }
export default Result; 