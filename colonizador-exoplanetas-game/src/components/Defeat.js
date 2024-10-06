import React from 'react';
import './Defeat.css';  // Asegúrate de crear este archivo

const Defeat = ({ onContinue }) => {
  return (
    <div className="defeat-container">
      <div className="defeat-box">
        <h1>Defeat</h1>  {/* Título principal */}
        <img src="/Defeat.png" alt="Defeat" className="defeat-image" />  {/* Imagen PNG */}
        <button onClick={onContinue} className="defeat-button">Continuar</button>  {/* Botón */}
      </div>
    </div>
  );
};

export default Defeat;