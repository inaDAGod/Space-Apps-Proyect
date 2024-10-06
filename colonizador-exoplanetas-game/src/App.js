import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importa BrowserRouter y Route
import Home from './components/Home'; // Importa tu componente Home
import Game from './components/Game'; // Importa tu componente Game (asegúrate de tener este componente)
<<<<<<< HEAD
import MyCarousel from './components/MyCarousel';
//<Route path="/" element={<MyCarousel />} /> {/* Ruta para el componente Home */}
//<Route path="/mycarousel" element={<MyCarousel />} /> {/* Ruta para el componente Game */}

=======
import Gallery from './components/Gallery'; 
import Trivia from './components/MyCarousel'; 
>>>>>>> origin/DAGod

const App = () => {
  return (
    <Router>
      <Routes>
<<<<<<< HEAD
        <Route path="/" element={<MyCarousel />} /> {/* Ruta para el componente Home */}
        <Route path="/mycarousel" element={<MyCarousel />} /> {/* Ruta para el componente Game */}
=======
        <Route path="/" element={<Home />} /> {/* Ruta para el componente Home */}
        <Route path="/game" element={<Game />} /> {/* Ruta para el componente Game */}
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/trivia" element={<Trivia />} />
>>>>>>> origin/DAGod
      </Routes>
    </Router>
  );
};

export default App;