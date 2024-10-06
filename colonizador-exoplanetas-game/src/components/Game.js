import React, { useState, useEffect } from 'react';
import Phaser from 'phaser';
import exoplanetas from '../data/exoplanetas';
import PlanetInfoCard from './PlanetInfoCard';
import SurvivalModal from './SurvivalModal';
import Victory from './Victory'; // Importar componente Victory
import Defeat from './Defeat'; // Importar componente Defeat

const Game = () => {
  const [selectedPlanet, setSelectedPlanet] = useState(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [gasolina, setGasolina] = useState(80);
  const [currentPlanetIndex, setCurrentPlanetIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [gameState, setGameState] = useState('playing'); // Nuevo estado para controlar el estado del juego
  const planetChunkSize = 4;
  let gameInstance = null;

  useEffect(() => {
    if (gameState !== 'playing') return;

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

    gameInstance = new Phaser.Game(config);

    function preload() {
      this.load.image('espacio', process.env.PUBLIC_URL + '/ESPACIO.jpeg');
      this.load.image('nave', process.env.PUBLIC_URL + '/NAVE.png');
      this.load.image('gasofa', process.env.PUBLIC_URL + '/gasofa.png');
      exoplanetas.forEach(planet => {
        this.load.image(planet.nombre, process.env.PUBLIC_URL + '/' + planet.imagen);
      });
      this.load.audio('musicaFondo', process.env.PUBLIC_URL + '/fondo_musica.mp3');
      this.load.audio('musicaViaje', process.env.PUBLIC_URL + '/ir_musica.mp3');
      this.load.audio('musicaModal', process.env.PUBLIC_URL + '/fin_musica.mp3');
    }

    function create() {
      this.add.tileSprite(0, 0, this.scale.width, this.scale.height, 'espacio').setOrigin(0, 0);

      const music = this.sound.add('musicaFondo', { loop: true });
      music.play();

      const naveStartX = 100;
      const naveStartY = this.scale.height - 100;

      this.nave = this.physics.add.sprite(naveStartX, naveStartY, 'nave');
      this.nave.setScale(0.2);
      this.nave.setCollideWorldBounds(true);
      this.nave.setAngle(70);
      this.nave.setDepth(10);

      this.currentPlanets = [];
      displayPlanets.call(this, currentPlanetIndex);
    }

    function displayPlanets(startIndex) {
      const minPlanetDistance = 150;
      const minNaveDistance = 200;
      const minSelectedPlanetDistance = 200;

      const planetCount = Math.min(exoplanetas.length - startIndex, planetChunkSize);
      const planetPositions = [];

      this.currentPlanets.forEach(planet => planet.destroy());
      this.currentPlanets = [];

      for (let i = 0; i < planetCount; i++) {
        let randomX, randomY, isValidPosition;
        const planetData = exoplanetas[startIndex + i];

        do {
          randomX = Phaser.Math.Between(100, this.scale.width - 100);
          randomY = Phaser.Math.Between(100, this.scale.height - 100);

          isValidPosition = planetPositions.every(pos =>
            Phaser.Math.Distance.Between(randomX, randomY, pos.x, pos.y) >= minPlanetDistance
          ) && Phaser.Math.Distance.Between(randomX, randomY, 100, this.scale.height - 100) >= minNaveDistance;

          if (selectedPlanet) {
            isValidPosition = isValidPosition && Phaser.Math.Distance.Between(randomX, randomY, position.x, position.y) >= minSelectedPlanetDistance;
          }

        } while (!isValidPosition);

        planetPositions.push({ x: randomX, y: randomY });

        const planet = this.add.image(randomX, randomY, planetData.nombre).setOrigin(0.5, 0.5).setScale(0.4);
        planet.setInteractive();

        planet.on('pointerover', () => {
          setSelectedPlanet(planetData);
          setPosition({ x: randomX, y: randomY });
        });

        planet.on('pointerdown', () => {
          moveShipToPlanet.call(this, randomX, randomY, planetData, startIndex);
        });

        this.currentPlanets.push(planet);
      }

      // Verificar si no hay más planetas para mostrar
      if (startIndex + planetChunkSize >= exoplanetas.length) {
        setGameState('victory');
      }
    }

    function moveShipToPlanet(x, y, planetData, startIndex) {
      this.nave.body.setVelocity(0);
      this.physics.moveTo(this.nave, x, y, 300);
      this.nave.rotation = Phaser.Math.Angle.Between(this.nave.x, this.nave.y, x, y);
      this.targetX = x;
      this.targetY = y;
      const viajeMusic = this.sound.add('musicaViaje', { loop: false });
      viajeMusic.play();
      
      this.tweens.add({
        targets: this.nave,
        duration: 2000,
        onComplete: () => {
          if (parseFloat(planetData.probSupervivencia) > 60) {
            setGasolina(prev => {
              const newGasolina = Math.min(prev + 20, 100);
              if (newGasolina <= 0) setGameState('defeat');
              return newGasolina;
            });
          } else {
            setGasolina(prev => {
              const newGasolina = Math.max(prev - 30, 0);
              if (newGasolina <= 0) setGameState('defeat');
              return newGasolina;
            });
          }
          
          setTimeout(() => {
            const modalMusic = this.sound.add('musicaModal', { loop: false });
            modalMusic.play();
            
            this.tweens.add({
              targets: this.currentPlanets,
              alpha: { from: 1, to: 0 },
              duration: 500,
              onComplete: () => {
                setShowModal(true);
                setSelectedPlanet(planetData);
                setCurrentPlanetIndex(startIndex + planetChunkSize);
                displayPlanets.call(this, startIndex + planetChunkSize);
                
                this.tweens.add({
                  targets: this.currentPlanets,
                  alpha: { from: 0, to: 1 },
                  duration: 500,
                });
              }
            });
          }, 5000);
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
      if (gameInstance) {
        gameInstance.destroy(true);
      }
    };
  }, [currentPlanetIndex, gameState]);

  const renderGasofaImages = () => {
    const gasofaCount = Math.floor(gasolina / 10);
    const gasofaImages = [];
    
    for (let i = 0; i < gasofaCount; i++) {
      gasofaImages.push(<img key={i} src={process.env.PUBLIC_URL + '/gasofa.png'} alt="Gasolina" style={{ width: '30px', marginRight: '5px' }} />);
    }

    return gasofaImages;
  };

  const handleContinue = () => {
    // Reiniciar el juego
    setGameState('playing');
    setGasolina(80);
    setCurrentPlanetIndex(0);
    // Aquí puedes añadir cualquier otra lógica de reinicio que necesites
  };

  if (gameState === 'victory') {
    return <Victory onContinue={handleContinue} />;
  }

  if (gameState === 'defeat') {
    return <Defeat onContinue={handleContinue} />;
  }

  return (
    <div id="phaser-container">
      {selectedPlanet && <PlanetInfoCard planetData={selectedPlanet} position={position} />}
      {showModal && (
        <SurvivalModal 
          planetData={selectedPlanet} 
          onClose={() => setShowModal(false)} 
        />
      )}
      <div style={{ position: 'absolute', top: 20, left: 20, color: 'white' }}>
        <h4>.</h4>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {renderGasofaImages()} {/* Renderizamos las imágenes de "Gasofa" */}
        </div>
      </div>
    </div>
  );
};

export default Game;
