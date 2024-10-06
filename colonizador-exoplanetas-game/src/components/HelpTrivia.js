import React from 'react';
import './HelpGame.css'; 

const HelpTrivia = ({ onClose }) => {
  return (
    <div className="help-overlay">
      <div className="help-container">
        <h1 className="help-title">Instrucciones del Juego de Trivia</h1>
        <p className="help-description">
          ¡Bienvenido al juego de trivia de exoplanetas! A continuación te explicamos cómo jugar:
        </p>
        <ul className="help-list">
          <li>
            <strong>División en Sectores:</strong> El juego se divide en tres sectores:
          </li>
          <li>
            <strong>Barra de Progreso:</strong> Muestra tu avance en el juego.
          </li>
          <li>
            <strong>Card de Pregunta:</strong> Aquí se mostrará la pregunta relacionada con los exoplanetas.
          </li>
          <li>
            <strong>Opciones de Respuesta:</strong> Tendrás tres posibles respuestas para cada pregunta.
          </li>
          <li>
            <strong>Saltando Preguntas:</strong> Puedes saltar una pregunta, y esta se marcará en negro.
          </li>
          <li>
            <strong>Respuestas Correctas e Incorrectas:</strong>
            Al seleccionar la respuesta correcta, la barra de progreso se volverá verde, y se mostrará una respuesta más detallada. Si la respuesta es incorrecta, se volverá roja. En ambos casos se dara la respuesta correcta para aprender!
          </li>
          <li>
            <strong>Final del Juego:</strong> Al finalizar, recibirás una notificación con la cantidad total de preguntas respondidas correctamente y un botón de reinicio que restablecerá la barra de progreso.
          </li>
        </ul>
        <button className="help-close" onClick={onClose}>Cerrar</button>
      </div>
    </div>
  );
};

export default HelpTrivia;
