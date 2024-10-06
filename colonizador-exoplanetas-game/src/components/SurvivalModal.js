import React, { useEffect, useState } from 'react';
import './SurvivalModal.css'; // Asegúrate de agregar estilos

const SurvivalModal = ({ planetData, onClose }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  if (!planetData) return null;

  // Definir la imagen y el color del texto basado en la probabilidad de supervivencia
  let survivalImage;
  const probabilidad = parseFloat(planetData.probSupervivencia);

  if (probabilidad > 60) {
    survivalImage = process.env.PUBLIC_URL + '/vista_bien.jpg'; // Imagen para alta probabilidad
  } else if (probabilidad > 30) {
    survivalImage = process.env.PUBLIC_URL + '/vista_medio.jpg'; // Imagen para probabilidad media
  } else {
    survivalImage = process.env.PUBLIC_URL + '/vista_mal.webp'; // Imagen para baja probabilidad
  }

  return (
    <div className={`modal-overlay ${isVisible ? 'fade-in' : ''}`}>
      <div className="modal-content" style={{ backgroundImage: `url(${survivalImage})` }}>
        <button className="close-button" onClick={onClose}>X</button>
        <div className="content-survival">
          <h1 className="modal-title">Probabilidad de Supervivencia</h1>
          <h2 className="modal-percentage">{planetData.probSupervivencia}%</h2>
        </div>
      </div>
    </div>
  );
};

export default SurvivalModal;
