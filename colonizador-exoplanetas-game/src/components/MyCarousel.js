import React, { Component } from "react";
import styled from "styled-components";
import exoplanetQuestions from "../data/exoplanetQuestions"; // Ajusta la ruta aquí

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
    cards: exoplanetQuestions, // Usar el array importado
  };

  handleAnswerSelection = (answer) => {
    const currentCard = this.state.cards[this.state.currentCardIndex];
    const isCorrect = currentCard.answer === answer;
    if (isCorrect) {
      this.setState({ showAnswer: false, selectedAnswer: null }, this.handleNext);
    } else {
      this.setState({ showAnswer: true });
    }
  };

  handleNext = () => {
    this.setState((prevState) => ({
      currentCardIndex: (prevState.currentCardIndex + 1) % this.state.cards.length,
      selectedAnswer: null,
      showAnswer: false,
    }));
  };

  render() {
    const { currentCardIndex, selectedAnswer, showAnswer, cards } = this.state;
    const currentCard = cards[currentCardIndex];

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
                  value={currentCard.incorrect_answers[0]} // Primera respuesta incorrecta
                  checked={selectedAnswer === currentCard.incorrect_answers[0]}
                  onChange={() => this.handleAnswerSelection(currentCard.incorrect_answers[0])}
                />
                {currentCard.incorrect_answers[0]} 
              </label>
              <label>
                <input
                  type="radio"
                  value={currentCard.incorrect_answers[1]} // Segunda respuesta incorrecta
                  checked={selectedAnswer === currentCard.incorrect_answers[1]}
                  onChange={() => this.handleAnswerSelection(currentCard.incorrect_answers[1])}
                />
                {currentCard.incorrect_answers[1]} 
              </label>
              <div>
                <button onClick={() => this.handleAnswerSelection(selectedAnswer)}>Siguiente</button>
              </div>
            </>
          )}
          {showAnswer && (
            <>
              <p>La respuesta correcta es: {currentCard.answer}</p>
              <button onClick={this.handleNext}>Siguiente</button> {/* Botón para avanzar a la siguiente tarjeta */}
            </>
          )}
        </OptionsContainer>
      </Container>
    );
  }
}

export default MyCarousel;
