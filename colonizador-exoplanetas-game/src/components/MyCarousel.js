import React, { Component } from "react";
import styled from "styled-components";
import exoplanetQuestions from "../data/exoplanetQuestions";
import Card from "./Cardtri";
import ProgressBar from "./ProgressBar";

const Container = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const OptionsContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  max-width: 950px;
`;

const AnswerButton = styled.label`
  background-color: #836bcf;
  color: white;
  border-radius: 5px;
  padding: 10px 20px;
  margin: 5px;
  text-align: center;
  cursor: pointer;
  transition: background-color 0.3s;
  width: 45%;

  input {
    display: none;
  }

  &:hover {
    background-color: #f0f0f0;
    color: black;
  }

  &.selected {
    background-color: #52c0f5;
    color: #fff;
  }
`;

const NextButtonContainer = styled.div`
   background-color: #232289;
  border-radius: 5px;
  padding: 20px 40px;
  margin: 5px;
  font-size: 130%;
  text-align: center;
  cursor: pointer;
  transition: background-color 0.3s;
  width: 20%;
  border: none;
  color: white;

  &:hover {
    background-color: #127bb1;
    color: white;
  }
`;

const StyledButton = styled.button`
  background-color: #232289;
  border-radius: 5px;
  padding: 20px 40px;
  margin: 5px;
  font-size: 130%;
  text-align: center;
  cursor: pointer;
  transition: background-color 0.3s;
  width: 20%;
  border: none;
  color: white;

  &:hover {
    background-color: #127bb1;
    color: white;
  }
`;

const ResultsModal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  text-align: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;

const ModalButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #232289;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #127bb1;
  }
`;

class MyCarousel extends Component {
  state = {
    currentCardIndex: 0,
    selectedAnswer: null,
    showAnswer: false,
    isCorrect: null,
    noAnswer: false,
    cards: exoplanetQuestions,
    results: [],
    showResults: false
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
    this.setState((prevState) => ({
      isCorrect,
      showAnswer: true,
      selectedAnswer: answer,
      noAnswer: false,
      results: [
        ...prevState.results,
        { isCorrect, question: currentCard.question }
      ]
    }));
  };

  handleSkipQuestion = () => {
    this.setState((prevState) => ({
      showAnswer: true,
      selectedAnswer: null,
      noAnswer: false,
      results: [
        ...prevState.results,
        {
          isCorrect: null,
          question: this.state.cards[prevState.currentCardIndex].question,
          skipped: true
        }
      ]
    }));
  };

  handleNext = () => {
    if (this.state.currentCardIndex === this.state.cards.length - 1) {
      this.setState({ showResults: true });
    } else {
      this.setState((prevState) => ({
        currentCardIndex: prevState.currentCardIndex + 1,
        selectedAnswer: null,
        showAnswer: false,
        isCorrect: null,
        noAnswer: false
      }));
    }
  };

  handleRestart = () => {
    this.setState({
      currentCardIndex: 0,
      selectedAnswer: null,
      showAnswer: false,
      isCorrect: null,
      noAnswer: false,
      results: [],
      showResults: false
    });
  };

  render() {
    const {
      currentCardIndex,
      showAnswer,
      cards,
      isCorrect,
      noAnswer,
      results,
      showResults
    } = this.state;
    const currentCard = cards[currentCardIndex];
    const shuffledAnswers = this.shuffleAnswers(
      currentCard.answer,
      currentCard.incorrect_answers
    );
    const totalQuestions = cards.length;
    const resultsArray = results.map((result) => result.isCorrect);

    const correctAnswers = results.filter((result) => result.isCorrect).length;

    return (
      <Container>
        <ProgressBar
          totalQuestions={totalQuestions}
          resultsArray={resultsArray}
          results={results}
        />

        {!showResults ? (
          <>
            <Card
              question={currentCard.question}
              detailedAnswer={currentCard.detailed_answer}
              isCorrect={isCorrect}
              noAnswer={noAnswer}
              showAnswer={showAnswer}
            />

            <OptionsContainer>
              {!showAnswer &&
                shuffledAnswers.map((answer, index) => (
                  <AnswerButton
                    key={index}
                    className={
                      this.state.selectedAnswer === answer ? "selected" : ""
                    }
                  >
                    <input
                      type="radio"
                      value={answer}
                      checked={this.state.selectedAnswer === answer}
                      onChange={() => this.handleAnswerSelection(answer)}
                    />
                    {answer}
                  </AnswerButton>
                ))}
            </OptionsContainer>

            {showAnswer && (
              <NextButtonContainer onClick={this.handleNext}>
                Siguiente
              </NextButtonContainer>
            )}

            {!showAnswer && (
              <StyledButton onClick={this.handleSkipQuestion}>
                Saltar
              </StyledButton>
            )}
          </>
        ) : (
          <ResultsModal>
            <h2>Resultados del Cuestionario</h2>
            <p>
              Respondiste correctamente {correctAnswers} de {totalQuestions}{" "}
              preguntas.
            </p>
            <ModalButton onClick={this.handleRestart}>Reiniciar</ModalButton>
          </ResultsModal>
        )}
      </Container>
    );
  }
}

export default MyCarousel;
