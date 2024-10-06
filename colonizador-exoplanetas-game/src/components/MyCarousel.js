import React, { Component } from "react";
import './MyCarousel.css'; // Archivo CSS importado
import exoplanetQuestions from "../data/exoplanetQuestions";
import Card from "./Cardtri";
import ProgressBar from "./ProgressBar";

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
      <div className="container"
        style={{
          backgroundImage: `url('/ESPACIO.jpeg')`, // Establece aquí la imagen de fondo
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        >
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

            <div className="options-container">
              {!showAnswer &&
                shuffledAnswers.map((answer, index) => (
                  <label
                    key={index}
                    className={`answer-button ${
                      this.state.selectedAnswer === answer ? "selected" : ""
                    }`}
                  >
                    <input
                      type="radio"
                      value={answer}
                      checked={this.state.selectedAnswer === answer}
                      onChange={() => this.handleAnswerSelection(answer)}
                    />
                    {answer}
                  </label>
                ))}
            </div>

            {showAnswer && (
              <div className="next-button-container" onClick={this.handleNext}>
                Siguiente
              </div>
            )}

            {!showAnswer && (
              <button className="styled-button" onClick={this.handleSkipQuestion}>
                Saltar
              </button>
            )}
          </>
        ) : (
          <div className="results-modal">
            <h2>Resultados del Cuestionario</h2>
            <p>
              Respondiste correctamente {correctAnswers} de {totalQuestions}{" "}
              preguntas.
            </p>
            <button className="modal-button" onClick={this.handleRestart}>
              Reiniciar
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default MyCarousel;
