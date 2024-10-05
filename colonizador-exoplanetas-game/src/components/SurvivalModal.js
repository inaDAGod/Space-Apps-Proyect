import React from 'react';
import './SurvivalModal.css'; // Asegúrate de agregar estilos

const SurvivalModal = ({ planetData, onClose }) => {
  if (!planetData) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>X</button>
        <h2>Probabilidad de Supervivencia</h2>
        <p>{planetData.probSupervivencia}%</p>
      </div>
    </div>
  );
};

export default SurvivalModal;
