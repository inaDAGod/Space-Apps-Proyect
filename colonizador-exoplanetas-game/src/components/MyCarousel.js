import React, { Component } from "react";
import './MyCarousel.css'; 
import exoplanetQuestions from "../data/exoplanetQuestions";
import Card from "./Cardtri";
import ProgressBar from "./ProgressBar";
import HelpTrivia from "./HelpTrivia"; 
import ResultsModal from "./ResultsModal";
import Swal from 'sweetalert2';  // Importar SweetAlert2

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
    rank: "Cadet",  // Inicia el rango en "Cadet"
    correctAnswers: 0, // Contador de respuestas correctas
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

  // Función para manejar la promoción de rango
  updateRank = (correctAnswers) => {
    let newRank = "Cadet";
    if (correctAnswers >= 18) {
      newRank = "Galactic Master";
    } else if (correctAnswers >= 12) {
      newRank = "Space Admiral";
    } else if (correctAnswers >= 7) {
      newRank = "Commander";
    } else if (correctAnswers >= 3) {
      newRank = "Cadet";
    }

    if (newRank !== this.state.rank) {
      this.setState({ rank: newRank });
      
      // Mostrar SweetAlert2 con el nuevo rango
      Swal.fire({
        title: '¡Ascenso de Rango!',
        text: `¡Felicidades! Has sido ascendido a ${newRank}`,
        icon: 'success',
        confirmButtonText: '¡Genial!'
      });
    }
  };

  // Manejar la selección de respuestas
  handleAnswerSelection = (answer) => {
    const currentCard = this.state.cards[this.state.currentCardIndex];
    const isCorrect = currentCard.answer === answer;
    this.setState((prevState) => {
      const correctAnswers = isCorrect
        ? prevState.correctAnswers + 1
        : prevState.correctAnswers;

      // Actualizar el rango basado en el número de respuestas correctas
      this.updateRank(correctAnswers);

      return {
        isCorrect,
        showAnswer: true,
        selectedAnswer: answer,
        noAnswer: false,
        correctAnswers, // Actualiza la cantidad de respuestas correctas
        results: [
          ...prevState.results,
          { isCorrect, question: currentCard.question }
        ]
      };
    });
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
    const { currentCardIndex, cards, selectedAnswer } = this.state;
  
    // Verifica si estamos en la última pregunta
    if (currentCardIndex === cards.length - 1) {
      // Si se ha seleccionado una respuesta, muestra los resultados
      if (selectedAnswer !== null) {
        this.setState({ showResults: true });
      } else {
        // Si no hay respuesta seleccionada, muestra un mensaje o maneja eso como prefieras
        Swal.fire({
          title: '¡Espera!',
          text: 'Debes seleccionar una respuesta antes de continuar.',
          icon: 'warning',
          confirmButtonText: 'Ok'
        });
      }
    } else {
      // No se está en la última pregunta, oculta la respuesta y avanza
      this.setState({ showAnswer: false }, () => {
        setTimeout(() => {
          this.setState((prevState) => ({
            currentCardIndex: prevState.currentCardIndex + 1,
            selectedAnswer: null,
            isCorrect: null,
            noAnswer: false,
          }));
        }, 500); // Espera 500ms antes de avanzar
      });
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
      showHelp: false,
      rank: "Cadet",  // Reinicia el rango
      correctAnswers: 0, // Reinicia las respuestas correctas
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
      showHelp,
      rank, // Nuevo estado del rango
      correctAnswers // Cantidad de respuestas correctas
    } = this.state;

    const currentCard = cards[currentCardIndex];
    const shuffledAnswers = this.shuffleAnswers(
      currentCard.answer,
      currentCard.incorrect_answers
    );
    const totalQuestions = cards.length;
    const resultsArray = results.map((result) => result.isCorrect);

    return (
      <div className="container"
        style={{
          backgroundImage: `url('/ESPACIO.jpeg')`, 
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
          <ResultsModal
            correctAnswers={correctAnswers}
            totalQuestions={totalQuestions}
            rank={rank}  // Pasar el rango al modal
            onRestart={this.handleRestart}
          />
        )}

        {/* Botón redondo para abrir ayuda */}
        <button className="help-button" onClick={this.toggleHelp}>
          ?
        </button>

        {showHelp && <HelpTrivia onClose={this.toggleHelp} />}
      </div>
    );
  }
}

export default MyCarousel;
