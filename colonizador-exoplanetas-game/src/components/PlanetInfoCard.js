import React from 'react';

const PlanetInfoCard = ({ planetName, planetDescription, position }) => {
  if (!planetName) return null;

  return (
    <div 
      style={{
        position: 'absolute',
        top: position.y,
        left: position.x,
        backgroundColor: 'white',
        padding: '10px',
        borderRadius: '8px',
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
        zIndex: 1000,
      }}
    >
      <h3>{planetName}</h3>
      <p>{planetDescription}</p>
    </div>
  );
};

export default PlanetInfoCard;
 