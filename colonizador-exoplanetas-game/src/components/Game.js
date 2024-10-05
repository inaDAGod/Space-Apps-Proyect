import React, { useState, useEffect } from 'react';
import Phaser from 'phaser';
import exoplanetas from '../data/exoplanetas';
import PlanetInfoCard from './PlanetInfoCard'; // Importamos el nuevo componente
import SurvivalModal from './SurvivalModal'; // Importamos el modal

const Game = () => {
  const [selectedPlanet, setSelectedPlanet] = useState(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [gasolina, setGasolina] = useState(80); // Gasolina inicial en 80%
  const [currentPlanetIndex, setCurrentPlanetIndex] = useState(0); // Índice del conjunto actual de planetas
  const planetChunkSize = 4; // Tamaño del grupo de planetas que se muestran
  const [showModal, setShowModal] = useState(false); // Estado para mostrar el modal

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
      this.load.audio('musicaFondo', process.env.PUBLIC_URL + '/fondo_musica.mp3'); // Cargamos la música de fondo
      this.load.audio('musicaViaje', process.env.PUBLIC_URL + '/ir_musica.mp3');
      this.load.audio('musicaModal', process.env.PUBLIC_URL + '/fin_musica.mp3');
    }

    function create() {
      this.add.tileSprite(0, 0, this.scale.width, this.scale.height, 'espacio').setOrigin(0, 0);

      // Reproducir la música de fondo
      const music = this.sound.add('musicaFondo', { loop: true }); // Cargamos el sonido
      music.play(); // Iniciamos la reproducción de la música

      // Posición inicial de la nave
      const naveStartX = 100;
      const naveStartY = this.scale.height - 100;

      this.nave = this.physics.add.sprite(naveStartX, naveStartY, 'nave');
      this.nave.setScale(0.2);
      this.nave.setCollideWorldBounds(true);
      this.nave.setAngle(70);
      this.nave.setDepth(10);

      this.currentPlanets = []; // Array para almacenar los planetas visibles
      displayPlanets.call(this, currentPlanetIndex); // Mostrar los primeros planetas
    }


    // Función para mostrar un grupo de planetas
    function displayPlanets(startIndex) {
      const minPlanetDistance = 150; // Distancia mínima entre planetas
      const minNaveDistance = 200;  // Distancia mínima respecto a la nave
      const minSelectedPlanetDistance = 200; // Distancia mínima respecto al planeta seleccionado

      const planetCount = Math.min(exoplanetas.length - startIndex, planetChunkSize); // Elige el número correcto de planetas
      const planetPositions = [];

      // Limpiar planetas actuales
      this.currentPlanets.forEach(planet => planet.destroy());
      this.currentPlanets = [];

      for (let i = 0; i < planetCount; i++) {
        let randomX, randomY, isValidPosition;
        const planetData = exoplanetas[startIndex + i];

        // Intentar generar una posición válida
        do {
          randomX = Phaser.Math.Between(100, this.scale.width - 100);
          randomY = Phaser.Math.Between(100, this.scale.height - 100);

          isValidPosition = planetPositions.every(pos =>
            Phaser.Math.Distance.Between(randomX, randomY, pos.x, pos.y) >= minPlanetDistance
          ) && Phaser.Math.Distance.Between(randomX, randomY, 100, this.scale.height - 100) >= minNaveDistance;

          // Verificar también que los planetas no estén cerca del planeta seleccionado, si existe uno
          if (selectedPlanet) {
            isValidPosition = isValidPosition && Phaser.Math.Distance.Between(randomX, randomY, position.x, position.y) >= minSelectedPlanetDistance;
          }

        } while (!isValidPosition);

        planetPositions.push({ x: randomX, y: randomY });

        // Crear planeta en una posición válida
        const planet = this.add.image(randomX, randomY, planetData.nombre).setOrigin(0.5, 0.5).setScale(0.4);
        planet.setInteractive();

        planet.on('pointerover', () => {
          setSelectedPlanet(planetData);
          setPosition({ x: randomX, y: randomY });
        });

        planet.on('pointerdown', () => {
          moveShipToPlanet.call(this, randomX, randomY, planetData, startIndex); // Pasamos el índice actual al mover la nave
        });

        this.currentPlanets.push(planet); // Añadir planeta al array de planetas visibles
      }
    }

    function moveShipToPlanet(x, y, planetData, startIndex) {
      this.nave.body.setVelocity(0);
      this.physics.moveTo(this.nave, x, y, 300);
      this.nave.rotation = Phaser.Math.Angle.Between(this.nave.x, this.nave.y, x, y);
      this.targetX = x;
      this.targetY = y;
      // Reproducir la música del viaje
      const viajeMusic = this.sound.add('musicaViaje', { loop: false }); // Cargamos la música para el viaje
      viajeMusic.play(); // Iniciamos la reproducción de la música para el viaje
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
          // Esperar 5 segundos antes de mostrar los siguientes planetas
          setTimeout(() => {
            const modalMusic = this.sound.add('musicaModal', { loop: false }); // Cargar música para el modal
          modalMusic.play(); // Iniciar reproducción
            // Suavizar la transición
            this.tweens.add({
              targets: this.currentPlanets,
              alpha: { from: 1, to: 0 }, // Desvanecer planetas actuales
              duration: 500,
              
              onComplete: () => {
                 // Mostrar el modal de supervivencia
                setShowModal(true);
                setSelectedPlanet(planetData); // Asegurarse de que el modal tenga los datos correctos
                setCurrentPlanetIndex(startIndex + planetChunkSize); // Actualizar índice para mostrar los siguientes 4 planetas
                displayPlanets.call(this, startIndex + planetChunkSize); // Mostrar los siguientes planetas
               
                this.tweens.add({
                  targets: this.currentPlanets,
                  alpha: { from: 0, to: 1 }, // Volver a mostrar planetas nuevos
                  duration: 500,
                });
               
              }
            });
          }, 5000); // Esperar 5 segundos
          
          
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
  }, [currentPlanetIndex]); // Se vuelve a ejecutar cuando cambia el índice de planetas

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
      {showModal && (
        <SurvivalModal 
          planetData={selectedPlanet} 
          onClose={() => setShowModal(false)} 
        />
      )}
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
