import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importa BrowserRouter y Route
import Home from './components/Home'; // Importa tu componente Home
import Game from './components/Game'; // Importa tu componente Game (asegúrate de tener este componente)
import MyCarousel from './components/MyCarousel';
//<Route path="/" element={<MyCarousel />} /> {/* Ruta para el componente Home */}
//<Route path="/mycarousel" element={<MyCarousel />} /> {/* Ruta para el componente Game */}


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MyCarousel />} /> {/* Ruta para el componente Home */}
        <Route path="/mycarousel" element={<MyCarousel />} /> {/* Ruta para el componente Game */}
      </Routes>
    </Router>
  );
};

export default App;