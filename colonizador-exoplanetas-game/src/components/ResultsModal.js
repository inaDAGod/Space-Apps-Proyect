import React from 'react';
import './ResultsModal.css'; 

const ResultsModal = ({ correctAnswers, totalQuestions, rank, onRestart }) => {
  return (
    <div className="results-modal">
      <h2 className="results-title">Resultados del Cuestionario</h2>
      <p>
        Respondiste correctamente {correctAnswers} de {totalQuestions} preguntas.
      </p>
      <p>Rango final: {rank}</p> {/* Mostrar el rango final */}
      <button className="modal-button" onClick={onRestart}>
        Reiniciar
      </button>
    </div>
  );
};

export default ResultsModal;
