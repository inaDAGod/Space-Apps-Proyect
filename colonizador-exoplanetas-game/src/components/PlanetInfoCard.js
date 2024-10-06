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
        <p><strong>Numeros de estrellas:</strong> {planetData.NumeroDeEstrellas}</p>
        <p><strong>Numero de lunas:</strong> {planetData.NumeroDeLunas}</p>
        <p><strong>Periodo Orbital:</strong> {planetData.PeriodoOrbital} dias</p>
        <p><strong>Radio Del Planeta:</strong> {planetData.RadioDelPlaneta} radio de la tierra</p>
        <p><strong>Densidad Del Planeta:</strong> {planetData.DensidadDelPlaneta} g/cm^3</p>
        <p><strong>Flujo De Insolacion:</strong> {planetData.FlujoDeInsolacion} flujo terrestre</p>
        <p><strong>Termperatura De Equilibrio:</strong> {planetData.TermperaturaDeEquilibrio} Kelvin</p>
        <p><strong>Masa Estelar:</strong> {planetData.MasaEstelar} masa solar</p>
        <p><strong>Luminosidad Estelar:</strong> {planetData.LuminosidadEstelar} log(solar)</p>
        <p><strong>Distancia a la tierra:</strong> {planetData.Distancia} parcecs</p>
      </div>
    </div>
  );
};

export default PlanetInfoCard;
