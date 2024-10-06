import React from 'react';
import './HelpGame.css'; // Importa el archivo CSS

const HelpGame = ({ onClose }) => {
  return (
    <div className="help-overlay">
      <div className="help-container">
        <h1 className="help-title">Instrucciones del Juego</h1>
        <p className="help-description">
          ¡Bienvenido al juego de conquistador de exoplanetas! Aquí te explicamos cómo jugar:
        </p>
        <ul className="help-list">
          <li>
            <strong>Gasolina:</strong> Tu nave comienza con un 80% de gasolina.
          </li>
          <li>
            <strong>Exploración:</strong> Al explorar un planeta con baja probabilidad de supervivencia, tu gasolina se reducirá.
          </li>
          <li>
            <strong>Probabilidad de Supervivencia:</strong> Si un planeta tiene alta probabilidad de supervivencia, ¡tu gasolina aumentará!
          </li>
          <li>
            <strong>Información de Planetas:</strong> Al pasar el mouse sobre un planeta, verás información útil que te ayudará a tomar decisiones.
          </li>
          <li>
            <strong>Exploración de Planetas:</strong> Haz clic en un planeta para explorar; recibirás la probabilidad de supervivencia.
          </li>
          <li>
            <strong>Objetivo:</strong> No te quedes sin gasolina. Ganas si logras completar todas las rondas sin quedarte sin gasolina.
          </li>
        </ul>
        <h2 className="importance-title">Importancia de los Valores del Planeta</h2>
        <p className="importance-description">
          A continuación, se detallan los valores que afectan la posibilidad de supervivencia de un planeta:
        </p>
        <ul className="importance-list">
          <li>
            <strong>Número de Estrellas:</strong> La cantidad de estrellas alrededor del planeta afecta la estabilidad de su órbita. Un sistema con más estrellas puede tener interacciones gravitacionales más complejas que pueden afectar las condiciones del planeta.
          </li>
          <li>
            <strong>Número de Lunas:</strong> Las lunas pueden influir en la estabilidad del clima y las mareas. Un número mayor de lunas puede proporcionar un ambiente más estable.
          </li>
          <li>
            <strong>Periodo Orbital:</strong> El tiempo que tarda un planeta en orbitar su estrella determina la cantidad de energía solar que recibe. Un periodo más corto puede significar temperaturas más altas, lo que puede afectar la habitabilidad.
          </li>
          <li>
            <strong>Radio del Planeta:</strong> Un mayor radio puede indicar un planeta más grande y posiblemente más masivo, lo que puede afectar su capacidad para mantener una atmósfera.
          </li>
          <li>
            <strong>Densidad del Planeta:</strong> La densidad ayuda a entender la composición del planeta. Un planeta con baja densidad podría estar compuesto principalmente de gas, lo que puede no ser propicio para la vida.
          </li>
          <li>
            <strong>Flujo de Insolación:</strong> Este valor indica la cantidad de energía solar que recibe un planeta. Un flujo adecuado es esencial para mantener temperaturas que permitan la existencia de agua líquida.
          </li>
          <li>
            <strong>Temperatura de Equilibrio:</strong> La temperatura que alcanzaría el planeta en equilibrio térmico. Temperaturas demasiado altas o bajas pueden hacer imposible la existencia de vida.
          </li>
          <li>
            <strong>Masa Estelar:</strong> La masa de la estrella que orbita el planeta. Las estrellas más masivas pueden tener ciclos de vida más cortos y afectar la duración de la habitabilidad de los planetas.
          </li>
          <li>
            <strong>Luminosidad Estelar:</strong> Relacionada con la cantidad de luz que emite la estrella, lo que influye en la temperatura del planeta y su capacidad para sostener vida.
          </li>
          <li>
            <strong>Movimiento Propio Total:</strong> El movimiento de la estrella a través del espacio puede influir en la estabilidad del sistema planetario.
          </li>
          <li>
            <strong>Distancia:</strong> La distancia del planeta a su estrella es crucial para determinar si las condiciones son adecuadas para la vida. Planetas demasiado lejos o demasiado cerca pueden no ser habitables.
          </li>
        </ul>
        <button className="help-close" onClick={onClose}>Cerrar</button>
      </div>
    </div>
  );
};

export default HelpGame;
