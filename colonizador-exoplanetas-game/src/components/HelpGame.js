import React from 'react';
import './HelpGame.css'; // Importa el archivo CSS

const HelpGame = ({ onClose }) => {
  return (
    <div className="help-overlay">
      <div className="help-container">
        <h1 className="help-title">Instrucciones del Juego</h1>
        <p className="help-description">
          ¡Bienvenido al juego de conquistador de exoplanetas! Aquí te explicamos cómo jugar:
        </p>
        <ul className="help-list">
          <li>
            <strong>Gasolina:</strong> Tu nave comienza con un 80% de gasolina.
          </li>
          <li>
            <strong>Exploración:</strong> Al explorar un planeta con baja probabilidad de supervivencia, tu gasolina se reducirá.
          </li>
          <li>
            <strong>Probabilidad de Supervivencia:</strong> Si un planeta tiene alta probabilidad de supervivencia, ¡tu gasolina aumentará!
          </li>
          <li>
            <strong>Información de Planetas:</strong> Al pasar el mouse sobre un planeta, verás información útil que te ayudará a tomar decisiones.
          </li>
          <li>
            <strong>Exploración de Planetas:</strong> Haz clic en un planeta para explorar; recibirás la probabilidad de supervivencia.
          </li>
          <li>
            <strong>Objetivo:</strong> No te quedes sin gasolina. Ganas si logras completar todas las rondas sin quedarte sin gasolina.
          </li>
        </ul>
        <button className="help-close" onClick={onClose}>Cerrar</button>
      </div>
    </div>
  );
};

export default HelpGame;
