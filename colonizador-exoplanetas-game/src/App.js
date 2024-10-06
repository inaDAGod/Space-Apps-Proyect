import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importa BrowserRouter y Route
import Home from './components/Home'; // Importa tu componente Home
import Game from './components/Game'; // Importa tu componente Game (asegúrate de tener este componente)
//import MyCarousel from './components/MyCarousel';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Game />} /> {/* Ruta para el componente Home */}
        <Route path="/game" element={<Game />} /> {/* Ruta para el componente Game */}
      </Routes>
    </Router>
  );
};

export default App;