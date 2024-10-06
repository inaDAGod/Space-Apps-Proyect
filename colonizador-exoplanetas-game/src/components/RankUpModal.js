import React from "react";
import './RankPromotionModal.css';

const RankUpModal = ({ rank, onClose }) => {
  return (
    <div className="rank-promotion-modal-overlay">
      <div className="rank-promotion-modal">
        <h2>¡Ascendido!</h2>
        <p>Has sido ascendido a {rank}</p>
        <button className="close-button" onClick={onClose}>
          Cerrar
        </button>
      </div>
    </div>
  );
};

export default RankUpModal;
