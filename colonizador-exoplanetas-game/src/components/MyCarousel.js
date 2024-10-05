import React, { Component } from "react";
import styled from "styled-components";
import exoplanetQuestions from "../data/exoplanetQuestions"; // Ajusta la ruta si es necesario

// Estilos del contenedor principal
const Container = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CardContainer = styled.div`
  perspective: 1000px;
`;

const Card = styled.div`
  width: 900px;
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
  backface-visibility: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: sans-serif;
  font-size: 20px;
  color: #fff;
  background-color: #52C0F5; /* Azul para el estado inicial */
  border-radius: 10px;
`;

const CardBack = styled(CardFace)`
  transform: rotateY(180deg);
  background-color: ${(props) =>
    props.noAnswer ? "#52C0F5" : props.isCorrect ? "#4CAF50" : "#FF6B6B"}; /* Azul si no se selecciona respuesta, verde si es correcto, rojo si es incorrecto */
`;


const OptionsContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: row;  /* Alinea los elementos en una fila */
  justify-content: space-between;  /* Añade espacio entre las respuestas */
  width: 100%;  /* Asegúrate de que el contenedor ocupe todo el ancho */
  max-width: 900px;  /* Limita el ancho máximo para no ocupar toda la pantalla */
`;

const AnswerButton = styled.label`
  background-color: #719db2;
  border-radius: 5px;
  padding: 10px 20px;
  margin: 5px;
  text-align: center;
  cursor: pointer;
  transition: background-color 0.3s;
  width: 45%;  /* Reducimos el ancho para que quepan dos respuestas por fila */

  input {
    display: none;
  }

  &:hover {
    background-color: #f0f0f0;
  }

  &.selected {
    background-color: #52C0F5;
    color: #fff;
  }
`;


const NextButtonContainer = styled.div`
  background-color: yellow;
  border-radius: 5px;
  text-align: center;
  margin-top:10px;
  cursor: pointer;
  transition: background-color 0.3s;
  width: 30%;
  
  &:hover {
    background-color: red;
  }

  &.selected {
    background-color: blue;
    color: #fff;
  }
`;

const StyledButton = styled.button`
  background-color: #719db2;
  border-radius: 5px;
  padding: 20px 40px;
  margin: 5px;
  text-align: center;
  cursor: pointer;
  transition: background-color 0.3s;
  width: 98%;
  border: none;
  color: white;
  
  &:hover {
    background-color: purple;
    color: black;
  }
`;

class MyCarousel extends Component {
  state = {
    currentCardIndex: 0,
    selectedAnswer: null,
    showAnswer: false,
    isCorrect: null, // Nueva variable para rastrear si es correcto
    noAnswer: false, // Nueva variable para rastrear si no se seleccionó respuesta
    cards: exoplanetQuestions, // Preguntas importadas
  };

  shuffleAnswers = (correctAnswer, incorrectAnswers) => {
    const allAnswers = [correctAnswer, ...incorrectAnswers];
    for (let i = allAnswers.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [allAnswers[i], allAnswers[j]] = [allAnswers[j], allAnswers[i]];
    }
    return allAnswers;
  };

  handleAnswerSelection = (answer) => {
    const currentCard = this.state.cards[this.state.currentCardIndex];
    const isCorrect = currentCard.answer === answer;
    this.setState({ 
      isCorrect, 
      showAnswer: true, 
      selectedAnswer: answer,
      noAnswer: false // Restablece el estado de no respuesta
    });
  };

  handleNext = () => {
    if (this.state.showAnswer) {
      // Si ya se mostró la respuesta, pasar a la siguiente pregunta
      this.setState((prevState) => ({
        currentCardIndex: (prevState.currentCardIndex + 1) % this.state.cards.length,
        selectedAnswer: null,
        showAnswer: false,
        isCorrect: null, // Restablece el estado de corrección
        noAnswer: false, // Restablece el estado de no respuesta
      }));
    } else {
      // Si no se ha seleccionado una respuesta, voltea la carta y muestra la respuesta
      if (this.state.selectedAnswer === null) {
        this.setState({ showAnswer: true, noAnswer: true });
      }
    }
  };

  render() {
    const { currentCardIndex, showAnswer, cards, isCorrect, noAnswer } = this.state;
    const currentCard = cards[currentCardIndex];
    const shuffledAnswers = this.shuffleAnswers(currentCard.answer, currentCard.incorrect_answers);

    return (
      <Container>
        <CardContainer>
          <Card className={showAnswer ? "flipped" : ""}>
            <CardFace>{currentCard.question}</CardFace>
            <CardBack isCorrect={isCorrect} noAnswer={noAnswer}>
              {currentCard.detailed_answer}
            </CardBack>
          </Card>
        </CardContainer>

        <OptionsContainer>
          {!showAnswer && (
            shuffledAnswers.map((answer, index) => (
              <AnswerButton
                key={index}
                className={this.state.selectedAnswer === answer ? 'selected' : ''}
              >
                <input
                  type="radio"
                  value={answer}
                  checked={this.state.selectedAnswer === answer}
                  onChange={() => this.handleAnswerSelection(answer)}
                />
                {answer}
              </AnswerButton>
            ))
          )}
        </OptionsContainer>

        <NextButtonContainer>
          <StyledButton onClick={this.handleNext}>
            Siguiente
          </StyledButton>
        </NextButtonContainer>
      </Container>
    );
  }
}

export default MyCarousel;
