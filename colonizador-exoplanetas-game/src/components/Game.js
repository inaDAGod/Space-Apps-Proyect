import React, { useState, useEffect } from 'react';
import Phaser from 'phaser';
import exoplanetas from '../data/exoplanetas';
import PlanetInfoCard from './PlanetInfoCard'; // Importamos el nuevo componente

const Game = () => {
  const [selectedPlanet, setSelectedPlanet] = useState(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [gasolina, setGasolina] = useState(80); // Gasolina inicial en 80%

  useEffect(() => {
    const config = {
      type: Phaser.AUTO,
      width: window.innerWidth,
      height: window.innerHeight,
      physics: {
        default: 'arcade',
        arcade: {
          gravity: { y: 0 },
        },
      },
      scene: {
        preload: preload,
        create: create,
        update: update,
      },
    };

    const game = new Phaser.Game(config);

    function preload() {
      this.load.image('espacio', process.env.PUBLIC_URL + '/ESPACIO.jpeg');
      this.load.image('nave', process.env.PUBLIC_URL + '/NAVE.png');
      this.load.image('gasofa', process.env.PUBLIC_URL + '/gasofa.png'); // Cargamos la imagen de Gasofa
      exoplanetas.forEach(planet => {
        this.load.image(planet.nombre, process.env.PUBLIC_URL + '/' + planet.imagen);
      });
    }

    function create() {
      this.add.tileSprite(0, 0, this.scale.width, this.scale.height, 'espacio').setOrigin(0, 0);

      // Posición inicial de la nave
      const naveStartX = 100;
      const naveStartY = this.scale.height - 100;

      this.nave = this.physics.add.sprite(naveStartX, naveStartY, 'nave');
      this.nave.setScale(0.2);
      this.nave.setCollideWorldBounds(true);
      this.nave.setAngle(70);
      this.nave.setDepth(10);

      // Función para verificar la distancia entre dos puntos
      const checkDistance = (x1, y1, x2, y2, minDistance) => {
        const dist = Phaser.Math.Distance.Between(x1, y1, x2, y2);
        return dist >= minDistance;
      };

      const planetCount = 4; // Mostrar solo los primeros 4 planetas
      const minPlanetDistance = 150; // Distancia mínima entre planetas
      const minNaveDistance = 200;  // Distancia mínima de los planetas respecto a la nave
      const planetPositions = [];

      for (let i = 0; i < planetCount; i++) {
        let randomX, randomY, isValidPosition;

        // Intentar generar una posición válida que respete la distancia mínima
        do {
          randomX = Phaser.Math.Between(100, this.scale.width - 100);
          randomY = Phaser.Math.Between(100, this.scale.height - 100);

          // Verificar que la nueva posición no esté demasiado cerca de las ya generadas
          isValidPosition = planetPositions.every(pos => 
            checkDistance(randomX, randomY, pos.x, pos.y, minPlanetDistance)
          ) && checkDistance(randomX, randomY, naveStartX, naveStartY, minNaveDistance); // Verificar que no esté cerca de la nave
        } while (!isValidPosition);

        // Almacenamos la posición válida en el array
        planetPositions.push({ x: randomX, y: randomY });

        const planetData = exoplanetas[i];
        const planet = this.add.image(randomX, randomY, planetData.nombre).setOrigin(0.5, 0.5).setScale(0.4);

        planet.setInteractive();

        planet.on('pointerover', () => {
          setSelectedPlanet(planetData);
          setPosition({ x: randomX, y: randomY });
        });

        planet.on('pointerdown', () => {
          moveShipToPlanet.call(this, randomX, randomY, planetData);
        });
      }
    }

    function moveShipToPlanet(x, y, planetData) {
      this.nave.body.setVelocity(0);
      this.physics.moveTo(this.nave, x, y, 300);
      this.nave.rotation = Phaser.Math.Angle.Between(this.nave.x, this.nave.y, x, y);
      this.targetX = x;
      this.targetY = y;

      // Agregar lógica para los recursos después de que la nave llegue al planeta
      this.tweens.add({
        targets: this.nave,
        duration: 2000, // Duración de la animación
        onComplete: () => {
          // Actualizar los recursos al llegar al planeta
          if (parseFloat(planetData.probSupervivencia) > 60) {
            setGasolina(prev => Math.min(prev + 20, 100)); // Aumentar la gasolina
          } else {
            setGasolina(prev => Math.max(prev - 30, 0)); // Reducir la gasolina
          }
        }
      });
    }

    function update() {
      if (this.nave.body.speed > 0 && this.targetX !== null && this.targetY !== null) {
        const distance = Phaser.Math.Distance.Between(this.nave.x, this.nave.y, this.targetX, this.targetY);
        if (distance < 10) {
          this.nave.body.setVelocity(0);
          this.targetX = null;
          this.targetY = null;
        }
      }
    }

    return () => {
      game.destroy(true);
    };
  }, []);

  // Función para renderizar las imágenes de Gasofa según el porcentaje de gasolina
  const renderGasofaImages = () => {
    const gasofaCount = Math.floor(gasolina / 10); // Un "Gasofa" por cada 10% de gasolina
    const gasofaImages = [];
    
    for (let i = 0; i < gasofaCount; i++) {
      gasofaImages.push(<img key={i} src={process.env.PUBLIC_URL + '/gasofa.png'} alt="Gasolina" style={{ width: '30px', marginRight: '5px' }} />);
    }

    return gasofaImages;
  };

  return (
    <div id="phaser-container">
      {selectedPlanet && <PlanetInfoCard planetData={selectedPlanet} position={position} />}
      <div style={{ position: 'absolute', top: 20, left: 20, color: 'white' }}>
        <h4>Recursos:</h4>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {renderGasofaImages()} {/* Renderizamos las imágenes de "Gasofa" */}
        </div>
      </div>
    </div>
  );
};

export default Game;
