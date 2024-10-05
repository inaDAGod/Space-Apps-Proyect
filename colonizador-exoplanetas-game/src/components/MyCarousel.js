import React, { Component } from "react";
import styled from "styled-components";
import exoplanetQuestions from "../data/exoplanetQuestions"; // Adjust the path here

const Container = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column; /* Keep this as column for card layout */
  justify-content: center;
  align-items: center;
`;

const CardContainer = styled.div`
  perspective: 1000px; /* Gives a 3D effect when the card flips */
`;

const Card = styled.div`
  width: 800px;
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

const StyledButton = styled.button`
  background-color:#719db2;
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

  &.selected {
    background-color: #52C0F5;
    color: #fff;
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
  display: flex;
  flex-wrap: wrap; /* Allows wrapping if needed */
  justify-content: center; /* Centers the options */
`;

const AnswerButton = styled.label`
  background-color:#719db2; /* White background */
  border-radius: 5px;
  padding: 10px 20px;
  margin: 5px; /* Space between buttons */
  text-align: center; /* Center text */
  cursor: pointer;
  transition: background-color 0.3s;
  width: 30%; /* Set width for 3 buttons in a row */

  input {
    display: none; /* Hides the radio input */
  }

  &:hover {
    background-color: #f0f0f0; /* Background color on hover */
  }

  &.selected {
    background-color: #52C0F5; /* Background color when selected */
    color: #fff; /* Changes text color */
  }
`;

const NextButtonContainer = styled.div`
  background-color:yellow; /* White background */
  border-radius: 5px;
  text-align: center; /* Center text */
  cursor: pointer;
  transition: background-color 0.3s;
  width: 30%; /* Set width for 3 buttons in a row */

  input {
    display: none; /* Hides the radio input */
  }

  &:hover {
    background-color: red; /* Background color on hover */
  }

  &.selected {
    background-color:blue; /* Background color when selected */
    color: #fff; /* Changes text color */
  }
`;

class MyCarousel extends Component {
  state = {
    currentCardIndex: 0,
    selectedAnswer: null,
    showAnswer: false,
    cards: exoplanetQuestions, // Use the imported array
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
    const shuffledAnswers = this.shuffleAnswers(currentCard.answer, currentCard.incorrect_answers);

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
              {shuffledAnswers.map((answer, index) => (
                <AnswerButton
                  key={index}
                  className={selectedAnswer === answer ? 'selected' : ''}
                >
                  <input
                    type="radio"
                    value={answer}
                    checked={selectedAnswer === answer}
                    onChange={() => this.handleAnswerSelection(answer)}
                  />
                  {answer}
                </AnswerButton>
              ))}
            </>
          )}
          {showAnswer && (
            <>
              
            </>
          )}
        </OptionsContainer>

        <NextButtonContainer>
          {!showAnswer ? (
            <StyledButton onClick={() => this.handleAnswerSelection(selectedAnswer)}>Siguiente</StyledButton>
          ) : (
            <>
              <StyledButton onClick={this.handleNext}>Siguiente</StyledButton>
            </>
          )}
        </NextButtonContainer>

      </Container>
    );
  }
}

export default MyCarousel;
