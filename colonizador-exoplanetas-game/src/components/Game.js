import React, { useState, useEffect } from 'react';
import Phaser from 'phaser';
import exoplanetas from '../data/exoplanetas';
import PlanetInfoCard from './PlanetInfoCard'; // Importamos el nuevo componente

const Game = () => {
  const [selectedPlanet, setSelectedPlanet] = useState(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [gasolina, setGasolina] = useState(80); // Gasolina inicial en 80%
  const [oxigeno, setOxigeno] = useState(80); // Oxígeno inicial en 80%

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
      exoplanetas.forEach(planet => {
        this.load.image(planet.nombre, process.env.PUBLIC_URL + '/' + planet.imagen);
      });
    }

    function create() {
      this.add.tileSprite(0, 0, this.scale.width, this.scale.height, 'espacio').setOrigin(0, 0);

      this.nave = this.physics.add.sprite(100, this.scale.height - 100, 'nave');
      this.nave.setScale(0.2);
      this.nave.setCollideWorldBounds(true);
      this.nave.setAngle(70);
      this.nave.setDepth(10);

      const planetPositions = [
        { x: 600, y: 150 },
        { x: 1200, y: 400 },
        { x: 800, y: 300 },
        { x: 300, y: 500 }
      ];

      planetPositions.forEach((pos, index) => {
        const planetData = exoplanetas[index % exoplanetas.length];
        const planet = this.add.image(pos.x, pos.y, planetData.nombre).setOrigin(0.5, 0.5).setScale(0.4);

        planet.setInteractive();

        planet.on('pointerover', () => {
          setSelectedPlanet(planetData);
          setPosition({ x: pos.x, y: pos.y });
        });

        planet.on('pointerdown', () => {
          moveShipToPlanet.call(this, pos.x, pos.y, planetData);
        });
      });
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
            setOxigeno(prev => Math.min(prev + 20, 100)); // Aumentar el oxígeno
          } else {
            setGasolina(prev => Math.max(prev - 30, 0)); // Reducir la gasolina
            setOxigeno(prev => Math.max(prev - 30, 0)); // Reducir el oxígeno
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

  return (
    <div id="phaser-container">
      {selectedPlanet && <PlanetInfoCard planetData={selectedPlanet} position={position} />}
      <div style={{ position: 'absolute', top: 20, left: 20, color: 'white' }}>
        <h4>Recursos:</h4>
        <p>Gasolina: {gasolina}%</p>
        <p>Oxígeno: {oxigeno}%</p>
      </div>
    </div>
  );
};

export default Game;
