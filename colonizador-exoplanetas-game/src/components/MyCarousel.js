import React, { Component } from "react";
import './MyCarousel.css'; // Archivo CSS importado
import exoplanetQuestions from "../data/exoplanetQuestions";
import Card from "./Cardtri";
import ProgressBar from "./ProgressBar";
import HelpTrivia from "./HelpTrivia"; // Asegúrate de importar el componente HelpTrivia
import ResultsModal from "./ResultsModal"; // Importa el nuevo componente ResultsModal

class MyCarousel extends Component {
  state = {
    currentCardIndex: 0,
    selectedAnswer: null,
    showAnswer: false,
    isCorrect: null,
    noAnswer: false,
    cards: exoplanetQuestions,
    results: [],
    showResults: false,
    showHelp: false
  };

  // Función para mezclar las respuestas
  shuffleAnswers = (correctAnswer, incorrectAnswers) => {
    const allAnswers = [correctAnswer, ...incorrectAnswers];
    for (let i = allAnswers.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [allAnswers[i], allAnswers[j]] = [allAnswers[j], allAnswers[i]];
    }
    return allAnswers;
  };

  // Manejar la selección de respuestas
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

  // Saltar la pregunta
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

  // Avanzar a la siguiente pregunta
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

  // Reiniciar el juego
  handleRestart = () => {
    this.setState({
      currentCardIndex: 0,
      selectedAnswer: null,
      showAnswer: false,
      isCorrect: null,
      noAnswer: false,
      results: [],
      showResults: false,
      showHelp: false // Reiniciar showHelp a false
    });
  };

  // Alternar el estado del componente de ayuda
  toggleHelp = () => {
    this.setState((prevState) => ({ showHelp: !prevState.showHelp }));
  };

  render() {
    const {
      currentCardIndex,
      showAnswer,
      cards,
      isCorrect,
      noAnswer,
      results,
      showResults,
      showHelp 
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
      <div className="container">
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
          <ResultsModal
            correctAnswers={correctAnswers}
            totalQuestions={totalQuestions}
            onRestart={this.handleRestart}
          />
        )}

        {/* Botón redondo para abrir ayuda */}
        <button className="help-button" onClick={this.toggleHelp}>
          ?
        </button>

        {/* Componente de ayuda */}
        {showHelp && <HelpTrivia onClose={this.toggleHelp} />}
      </div>
    );
  }
}

export default MyCarousel;
