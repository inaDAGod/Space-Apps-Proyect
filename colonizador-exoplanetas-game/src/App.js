import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importa BrowserRouter y Route
import Home from './components/Home'; // Importa tu componente Home
import Game from './components/Game'; // Importa tu componente Game (asegúrate de tener este componente)
import Gallery from './components/Gallery'; 
import Navbar from './components/Navbar';
import MyCarousel from './components/MyCarousel';
import Contacto from './components/Contacto';
const App = () => {
  return (
    <Router>
      {/* Navbar */}
      <Navbar />
      <Routes>
      <Route path="/" element={<Home />} /> {/* Ruta para el componente Home */}
        <Route path="/game" element={<Game />} /> {/* Ruta para el componente Game */}
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/trivia" element={<MyCarousel />} />
        <Route path="/contacto" element={<Contacto/>} />
      </Routes>
    </Router>
  );
};

export default App;