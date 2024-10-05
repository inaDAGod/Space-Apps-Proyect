import React, { useEffect } from 'react';
import Phaser from 'phaser';
import exoplanetas from '../data/exoplanetas'; // Asegúrate de importar el JSON

const Game = () => {
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
        this.load.image(planet.nombre, process.env.PUBLIC_URL + '/' + planet.imagen); // Cargar imagen de cada planeta
      });
    }

    function create() {
      this.add
        .tileSprite(0, 0, this.scale.width, this.scale.height, 'espacio')
        .setOrigin(0, 0);

      this.nave = this.physics.add.sprite(100, this.scale.height - 100, 'nave');
      this.nave.setScale(0.2);
      this.nave.setCollideWorldBounds(true);
      this.nave.setAngle(70);
      this.nave.setDepth(10);

      // Crear planetas aleatorios
      const planetPositions = [
        { x: 600, y: 150 },
        { x: 1200, y: 400 },
        { x: 800, y: 300 },
        { x: 300, y: 500 }
      ];

      planetPositions.forEach((pos, index) => {
        const planetData = exoplanetas[index % exoplanetas.length]; // Seleccionar un planeta aleatorio
        const planet = this.add.image(pos.x, pos.y, planetData.nombre).setOrigin(0.5, 0.5).setScale(0.4);
        
        // Interactividad
        planet.setInteractive();
        
        // Mostrar información al pasar el cursor
        planet.on('pointerover', () => {
          const info = `
          Nombre: ${planetData.nombre}
          Consistencia: ${planetData.consistencia}
          Temperatura: ${planetData.temperatura}
          Líquido: ${planetData.liquido}
          Propiedades Atmosféricas: ${planetData.propAdmosfericas}
          Campo Magnético: ${planetData.campMagnetico}
          Masa/Radio: ${planetData.masaRadio}
          Distancia a la Tierra: ${planetData.distanciaTierra}
          Lunas: ${planetData.lunas}
          Distancia a su Sol: ${planetData.distanciaASuSol}
          Órbita alrededor del Sol: ${planetData.OrbitaSol}
          Probabilidad de Supervivencia: ${planetData.probSupervivencia}
          `;
          console.log(info); // Puedes cambiar esto para mostrar en un modal o tooltip
        });

        // Mover la nave al planeta
        planet.on('pointerdown', () => {
          moveShipToPlanet.call(this, pos.x, pos.y);
        });
      });
    }

    function moveShipToPlanet(x, y) {
      this.nave.body.setVelocity(0);
      this.physics.moveTo(this.nave, x, y, 300);
      this.nave.rotation = Phaser.Math.Angle.Between(this.nave.x, this.nave.y, x, y);
      this.targetX = x;
      this.targetY = y;
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

  return <div id="phaser-container"></div>;
};

export default Game;
