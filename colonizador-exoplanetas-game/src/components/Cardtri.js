import React from "react";
import './Cardtri.css';

const Cardtri = ({ question, detailedAnswer, isCorrect, noAnswer, showAnswer }) => {
  return (
    <div className="card-container">
      <div className={`card-wrapper ${showAnswer ? "flipped" : ""}`}>
        <div className="card-face">{question}</div>
        <div className={`card-back ${isCorrect ? "correct" : noAnswer ? "no-answer" : "incorrect"}`}>
          {detailedAnswer}
        </div>
      </div>
    </div>
  );
};

export default Cardtri;
