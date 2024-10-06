import React, { useEffect, useState } from 'react';
import './SurvivalModal.css'; // Asegúrate de agregar estilos

const SurvivalModal = ({ planetData, onClose }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [survivalImage, setSurvivalImage] = useState('');
  const [texto, setTexto] = useState('');

  useEffect(() => {
    if (planetData) {
      const probabilidadDeSupervivencia = planetData.probabilidadDeSupervivencia;

      // Definir la imagen y el texto basado en la probabilidad de supervivencia
      if (probabilidadDeSupervivencia === 'Sí') {
        setSurvivalImage(process.env.PUBLIC_URL + '/vista_bien.jpg'); // Imagen para alta probabilidad
        setTexto("Si Existen posibilidades de supervivencia");
      } else  {
        setSurvivalImage(process.env.PUBLIC_URL + '/vista_mal.webp'); // Imagen para baja probabilidad
        setTexto("No existen posibilidades de supervivencia");
      }
    }
    setIsVisible(true);
  }, [planetData]); // Se asegura de que solo se ejecute cuando planetData cambie

  if (!planetData) return null;

  return (
    <div className={`modal-overlay ${isVisible ? 'fade-in' : ''}`}>
      <div className="modal-content" style={{ backgroundImage: `url(${survivalImage})` }}>
        <button className="close-button" onClick={onClose}>X</button>
        <div className="content-survival">
          <h1 className="modal-title">{texto}</h1>
        </div>
      </div>
    </div>
  );
};

export default SurvivalModal;
