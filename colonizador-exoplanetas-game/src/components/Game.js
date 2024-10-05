import React, { useEffect } from 'react';
import Phaser from 'phaser';

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
      this.load.image('planeta1', process.env.PUBLIC_URL + '/DP_Leonis_b.png');
      this.load.image('planeta2', process.env.PUBLIC_URL + '/GJ 86 b.png');
    }

    function create() {
      this.add
        .tileSprite(0, 0, this.scale.width, this.scale.height, 'espacio')
        .setOrigin(0, 0);

      this.nave = this.physics.add.sprite(100, this.scale.height - 100, 'nave');
      this.nave.setScale(0.2);
      this.nave.setCollideWorldBounds(true);
      this.nave.setAngle(70);

      // Establecer la profundidad de la nave para que esté encima
      this.nave.setDepth(10);

      this.planet1 = this.add.image(400, 300, 'planeta1').setOrigin(0.5, 0.5);
      this.planet2 = this.add.image(700, 200, 'planeta2').setOrigin(0.5, 0.5);

      // Establecer la profundidad de los planetas
      this.planet1.setDepth(5);
      this.planet2.setDepth(5);

      this.planet1.setInteractive();
      this.planet2.setInteractive();

      this.input.on('gameobjectdown', (pointer, gameObject) => {
        if (gameObject === this.planet1) {
          moveShipToPlanet.call(this, 400, 300);
        } else if (gameObject === this.planet2) {
          moveShipToPlanet.call(this, 700, 200);
        }
      });
      
      // Agregar variable para almacenar el destino
      this.targetX = null;
      this.targetY = null;
    }

    // Mover la nave hacia el planeta
    function moveShipToPlanet(x, y) {
      // Detener la nave antes de moverla
      this.nave.body.setVelocity(0); // Detener cualquier movimiento previo
      this.physics.moveTo(this.nave, x, y, 300); // Mueve la nave hacia el planeta a 300 píxeles por segundo

      // Rotar la nave hacia el destino
      this.nave.rotation = Phaser.Math.Angle.Between(this.nave.x, this.nave.y, x, y);

      // Establecer las coordenadas de destino
      this.targetX = x;
      this.targetY = y;
    }

    function update() {
      // Detener la nave al llegar al destino
      if (this.nave.body.speed > 0 && this.targetX !== null && this.targetY !== null) {
        const distance = Phaser.Math.Distance.Between(this.nave.x, this.nave.y, this.targetX, this.targetY);
        if (distance < 10) {
          this.nave.body.setVelocity(0); // Detener la nave al llegar
          // Reiniciar el objetivo
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
