import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  perspective: 1000px;
`;

const CardWrapper = styled.div`
  width: 1000px;
  height: 400px;
  border-radius: 10px;
  position: relative;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  cursor: pointer;

  &.flipped {
    transform: rotateY(180deg);
  }
`;

const CardFace = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: sans-serif;
  font-size: 250%;
  color: #fff;
  padding-left: 2%;
  padding-right: 2%;
  background-color: #5c6992;
  border-radius: 10px;
`;

const CardBack = styled(CardFace)`
  transform: rotateY(180deg);
  font-size: 250%;
  padding-left: 2%;
  padding-right: 2%;
  background-color: ${(props) =>
    props.noAnswer ? "#0c1428" : props.isCorrect ? "#28c9ac" : "#c92850"};
`;

const Cardtri = ({ question, detailedAnswer, isCorrect, noAnswer, showAnswer }) => {
  return (
    <CardContainer>
      <CardWrapper className={showAnswer ? "flipped" : ""}>
        <CardFace>{question}</CardFace>
        <CardBack isCorrect={isCorrect} noAnswer={noAnswer}>
          {detailedAnswer}
        </CardBack>
      </CardWrapper>
    </CardContainer>
  );
};

export default Cardtri;
