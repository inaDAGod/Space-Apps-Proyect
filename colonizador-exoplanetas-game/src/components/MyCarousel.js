import React, { Component } from "react";
import './MyCarousel.css'; 
import exoplanetQuestions from "../data/exoplanetQuestions";
import Card from "./Cardtri";
import ProgressBar from "./ProgressBar";
import HelpTrivia from "./HelpTrivia"; 
import ResultsModal from "./ResultsModal";
import Swal from 'sweetalert2'; 

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
    showHelp: false,
    rank: "Cadet",
    correctAnswers: 0,
  };

  shuffleAnswers = (correctAnswer, incorrectAnswers) => {
    const allAnswers = [correctAnswer, ...incorrectAnswers];
    for (let i = allAnswers.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [allAnswers[i], allAnswers[j]] = [allAnswers[j], allAnswers[i]];
    }
    return allAnswers;
  };

  updateRank = (correctAnswers) => {
    let newRank = "Cadet";
    if (correctAnswers >= 18) newRank = "Galactic Master";
    else if (correctAnswers >= 12) newRank = "Space Admiral";
    else if (correctAnswers >= 7) newRank = "Commander";

    if (newRank !== this.state.rank) {
      this.setState({ rank: newRank });
      Swal.fire({
        title: '¡Ascenso de Rango!',
        text: `¡Felicidades! Has sido ascendido a ${newRank}`,
        icon: 'success',
        confirmButtonText: '¡Genial!',
      });
    }
  };

  handleAnswerSelection = (answer) => {
    const { currentCardIndex, cards } = this.state;
    const currentCard = cards[currentCardIndex];

    if (currentCard) {
      const isCorrect = currentCard.answer === answer;
      this.setState((prevState) => {
        const correctAnswers = isCorrect ? prevState.correctAnswers + 1 : prevState.correctAnswers;

        // Update rank based on correct answers
        this.updateRank(correctAnswers);

        return {
          isCorrect,
          showAnswer: true,
          selectedAnswer: answer,
          noAnswer: false,
          correctAnswers,
          results: [
            ...prevState.results,
            { isCorrect, question: currentCard.question },
          ],
        };
      });
    }
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
          question: this.state.cards[prevState.currentCardIndex]?.question,
          skipped: true,
        },
      ],
    }));
  };

  handleNext = () => {
    const { currentCardIndex, cards, selectedAnswer } = this.state;

    if (currentCardIndex === cards.length - 1) {
      if (selectedAnswer !== null) {
        this.setState({ showResults: true });
      }
    } else {
      this.setState({ showAnswer: false }, () => {
        setTimeout(() => {
          this.setState((prevState) => ({
            currentCardIndex: prevState.currentCardIndex + 1,
            selectedAnswer: null,
            isCorrect: null,
            noAnswer: false,
          }));
        }, 500);
      });
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
      showResults: false,
      showHelp: false,
      rank: "Cadet",
      correctAnswers: 0,
    });
  };

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
      showHelp,
      rank,
      correctAnswers,
    } = this.state;

    if (!cards.length) {
      return <div>No hay preguntas disponibles.</div>; // Early return if no cards
    }

    const currentCard = cards[currentCardIndex];
    const shuffledAnswers = this.shuffleAnswers(currentCard.answer, currentCard.incorrect_answers);
    const totalQuestions = cards.length;
    const resultsArray = results.map((result) => result.isCorrect);

    return (
      <div className="containertri" style={{
          backgroundImage: `url('/ESPACIO.jpeg')`, 
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <ProgressBar totalQuestions={totalQuestions} resultsArray={resultsArray} results={results} />

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
              {!showAnswer && shuffledAnswers.map((answer, index) => (
                <label key={index} className={`answer-button ${this.state.selectedAnswer === answer ? "selected" : ""}`}>
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
            rank={rank}
            onRestart={this.handleRestart}
          />
        )}

        <button className="help-button" onClick={this.toggleHelp}>
          ?
        </button>

        {showHelp && <HelpTrivia onClose={this.toggleHelp} />}
      </div>
    );
  }
}

export default MyCarousel;
