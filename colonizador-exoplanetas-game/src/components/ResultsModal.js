import React from 'react';
import './ResultsModal.css'; // Asegúrate de importar el CSS

const ResultsModal = ({ correctAnswers, totalQuestions, onRestart }) => {
  return (
    <div className="results-modal">
      <h2 className="results-title">Resultados del Cuestionario</h2>
      <p>
        Respondiste correctamente {correctAnswers} de {totalQuestions} preguntas.
      </p>
      <button className="modal-button" onClick={onRestart}>
        Reiniciar
      </button>
    </div>
  );
};

export default ResultsModal;
