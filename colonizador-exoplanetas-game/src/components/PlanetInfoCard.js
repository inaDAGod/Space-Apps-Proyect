import React, { useEffect, useState } from 'react';
import './PlanetInfoCard.css'; // Importamos el CSS

const PlanetInfoCard = ({ planetData, position }) => {
  const [adjustedPosition, setAdjustedPosition] = useState(position);

  useEffect(() => {
    // Ajustar la posición para que la tarjeta no salga de los bordes
    const cardWidth = 300; // El ancho de la tarjeta (puedes ajustar según tu diseño)
    const cardHeight = 450; // La altura de la tarjeta
    let { x, y } = position;

    // Asegurarnos de que no salga del borde derecho
    if (x + cardWidth > window.innerWidth) {
      x = window.innerWidth - cardWidth - 10; // Ajustamos con un pequeño margen
    }

    // Asegurarnos de que no salga del borde inferior
    if (y + cardHeight > window.innerHeight) {
      y = window.innerHeight - cardHeight - 10; // Ajustamos con un pequeño margen
    }

    // Asegurarnos de que no salga del borde izquierdo
    if (x < 0) {
      x = 10; // Agregamos un pequeño margen desde la izquierda
    }

    // Asegurarnos de que no salga del borde superior
    if (y < 0) {
      y = 10; // Agregamos un pequeño margen desde arriba
    }

    setAdjustedPosition({ x, y });
  }, [position]);

  if (!planetData) return null;

  return (
    <div 
      className="planet-card" 
      style={{ top: adjustedPosition.y, left: adjustedPosition.x }}
    >
      <div className="planet-card-header">
        <h3>{planetData.nombre}</h3>
      </div>
      <div className="planet-card-details">
        <p><strong>Consistencia:</strong> {planetData.consistencia}</p>
        <p><strong>Temperatura:</strong> {planetData.temperatura}</p>
        <p><strong>Líquido:</strong> {planetData.liquido}</p>
        <p><strong>Prop. Atmosféricas:</strong> {planetData.propAdmosfericas}</p>
        <p><strong>Campo Magnético:</strong> {planetData.campMagnetico}</p>
        <p><strong>Masa/Radio:</strong> {planetData.masaRadio}</p>
        <p><strong>Distancia a la Tierra:</strong> {planetData.distanciaTierra}</p>
        <p><strong>Lunas:</strong> {planetData.lunas}</p>
        <p><strong>Distancia a su Sol:</strong> {planetData.distanciaASuSol}</p>
        <p><strong>Órbita alrededor del Sol:</strong> {planetData.OrbitaSol}</p>
      </div>
    </div>
  );
};

export default PlanetInfoCard;
