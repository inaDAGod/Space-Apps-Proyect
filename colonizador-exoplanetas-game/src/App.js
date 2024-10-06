import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Asegúrate de importar BrowserRouter
import Home from './components/Home.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> {/* Aquí puedes definir tus rutas */}
      </Routes>
    </Router>
  );
}

export default App;
