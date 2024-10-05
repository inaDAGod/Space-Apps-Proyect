import React from 'react';
import './Victory.css';

const Victory = ({ onContinue }) => {
  return (
    <div className="victory-container">
      <div className="victory-message">
        <h1>¡Victory!</h1>
        <button className="continue-button" onClick={onContinue}>
          Continue
        </button>
      </div>
    </div>
  );
};

export default Victory;
