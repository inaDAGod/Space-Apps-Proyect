import React from 'react';
import './Victory.css';  // Asegúrate de crear este archivo

const Victory = ({ onContinue }) => {
  return (
    <div className="victory-container">
      <div className="victory-box">
        <h1>Victory</h1>  {/* Título principal */}
        <img src="/Victory.png" alt="Victory" className="victory-image" />
        <button onClick={onContinue} className="victory-button">Continuar</button>  {/* Botón */}
      </div>
    </div>
  );
};

export default Victory;