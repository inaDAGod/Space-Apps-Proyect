import React from "react";
import styled from "styled-components";

const ProgressBarWrapper = styled.div`
  width: 100%;
  background-color: lightgray;
  height: 15px;
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 2%;
  display: flex;
`;

const ProgressFiller = styled.div`
  height: 100%;
  width: ${(props) => props.width}%;
  background-color: ${(props) => props.color};
`;

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

    return <ProgressFiller key={index} width={(1 / totalQuestions) * 100} color={color} />;
  });

  return <ProgressBarWrapper>{progressElements}</ProgressBarWrapper>;
};

export default ProgressBar;
