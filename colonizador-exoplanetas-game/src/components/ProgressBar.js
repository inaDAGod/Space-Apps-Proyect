import React from "react";
import './ProgressBar.css'; // Archivo CSS importado

const ProgressBar = ({ totalQuestions, resultsArray, results }) => {
  const progressElements = results.map((result, index) => {
    let color;

    if (result.skipped) {
      color = "#0c1428"; // Color para preguntas saltadas
    } else if (result.isCorrect) {
      color = "#28c9ac"; // Color para respuestas correctas
    } else {
      color = "#c92850"; // Color para respuestas incorrectas
    }

    return (
      <div
        key={index}
        className="progress-filler"
        style={{
          width: `${(1 / totalQuestions) * 100}%`,
          backgroundColor: color,
        }}
      />
    );
  });

  return <div className="progress-bar-wrapper">{progressElements}</div>;
};

export default ProgressBar;
