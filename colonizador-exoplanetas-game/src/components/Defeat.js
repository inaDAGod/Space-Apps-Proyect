import React from 'react';
import './Defeat.css';

const Defeat = ({ onContinue }) => {
  return (
    <div className="defeat-container">
      <div className="defeat-message">
        <h1>Defeat</h1>
        <button className="continue-button" onClick={onContinue}>
          Continue
        </button>
      </div>
    </div>
  );
};

export default Defeat;
