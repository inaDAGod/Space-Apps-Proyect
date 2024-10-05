import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column; /* Cambiado a columna para apilar elementos */
  justify-content: center;
  align-items: center;
`;

const CardContainer = styled.div`
  perspective: 1000px; /* Gives a 3D effect when the card flips */
`;

const Card = styled.div`
  width: 500px;
  height: 500px;
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
  backface-visibility: hidden; /* Hides the back face when flipped */
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: sans-serif;
  font-size: 20px;
  color: #fff;
  background-color: #52C0F5;
  border-radius: 10px;
`;

const CardBack = styled(CardFace)`
  transform: rotateY(180deg); /* Flips the back face */
  background-color: #FF6B6B; /* Change this color as needed */
`;

const OptionsContainer = styled.div`
  margin-top: 20px;
`;

class MyCarousel extends Component {
  state = {
    currentCardIndex: 0,
    selectedAnswer: null,
    showAnswer: false,
  };

  cards = [
    { question: "What is the capital of France?", answer: "Paris" },
    { question: "What is 2 + 2?", answer: "4" },
    { question: "What is the largest planet?", answer: "Jupiter" },
    { question: "What is the chemical symbol for water?", answer: "H2O" },
    { question: "What year did the Titanic sink?", answer: "1912" }
  ];

  handleAnswerSelection = (answer) => {
    const currentCard = this.cards[this.state.currentCardIndex];
    const isCorrect = currentCard.answer === answer;
    if (isCorrect) {
      this.setState({ showAnswer: false, selectedAnswer: null }, this.handleNext);
    } else {
      this.setState({ showAnswer: true });
    }
  };

  handleNext = () => {
    this.setState((prevState) => ({
      currentCardIndex: (prevState.currentCardIndex + 1) % this.cards.length,
      selectedAnswer: null,
      showAnswer: false,
    }));
  };

  render() {
    const { currentCardIndex, selectedAnswer, showAnswer } = this.state;
    const currentCard = this.cards[currentCardIndex];

    return (
      <Container>
        <CardContainer>
          <Card className={showAnswer ? "flipped" : ""}>
            <CardFace>{currentCard.question}</CardFace>
            <CardBack>{currentCard.answer}</CardBack>
          </Card>
        </CardContainer>

        <OptionsContainer>
          {!showAnswer && (
            <>
              <label>
                <input
                  type="radio"
                  value={currentCard.answer}
                  checked={selectedAnswer === currentCard.answer}
                  onChange={() => this.handleAnswerSelection(currentCard.answer)}
                />
                {currentCard.answer}
              </label>
              <label>
                <input
                  type="radio"
                  value="Incorrect"
                  checked={selectedAnswer === "Incorrect"}
                  onChange={() => this.handleAnswerSelection("Incorrect")}
                />
                Incorrect
              </label>
              <label>
                <input
                  type="radio"
                  value="Incorrect"
                  checked={selectedAnswer === "Incorrect"}
                  onChange={() => this.handleAnswerSelection("Incorrect")}
                />
                Incorrect
              </label>
              <div>
                <button onClick={() => this.handleAnswerSelection(selectedAnswer)}>Siguiente</button>
              </div>
            </>
          )}
          {showAnswer && (
            <>
              <p>The correct answer is: {currentCard.answer}</p>
              <button onClick={this.handleNext}>Siguiente</button> {/* Botón para avanzar a la siguiente tarjeta */}
            </>
          )}
        </OptionsContainer>
      </Container>
    );
  }
}

export default MyCarousel;
