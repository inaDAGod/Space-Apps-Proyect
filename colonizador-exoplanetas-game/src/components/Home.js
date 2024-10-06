import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importa el hook useNavigate para la navegación

const Home = () => {

  return (
    <div className="home-container">
      <h1>Colonizador de Exoplanetas</h1>
      <p>
        Explora el vasto universo, descubre nuevos planetas y establece
        colonias en los más lejanos mundos. ¿Tienes lo necesario para
        encontrar vida más allá de la Tierra?
      </p>
    </div>
  );
};

export default Home;