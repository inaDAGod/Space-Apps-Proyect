import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import './Home.css';
import TextBlock from './textBlock';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate('/otra-pagina');
    };

    return (
        <Parallax pages={2} style={{ top: '0', left: '0' }} className="animation">
          <ParallaxLayer offset={0} speed={0.25}>
            <div className="animation_layer parallax" id="ESPACIO"></div>
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={0.40}>
            <div className="animation_layer parallax" id="NEBULOSA1"></div>
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={0.5}>
            <div className="animation_layer parallax" id="NEBULOSA2"></div>
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={0.35}>
            <div className="animation_layer parallax" id="NAVE"></div>
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={0.25}>
            <div className="animation_layer parallax" id="PLANETA"></div>
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={0.25}>
            <div className="animation_layer parallax" id="HUMO"></div>
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={0.25}>
            <div className="animation_layer parallax" id="BOTON-PARTE">
                {/* Llama a la función handleButtonClick al hacer clic en el botón */}
                <button className="Button" id="BOTON" onClick={handleButtonClick}>
                    JUGAR
                </button>
            </div>
          </ParallaxLayer>
          <ParallaxLayer offset={1} speed={0.25}>
            <TextBlock />
          </ParallaxLayer>
        </Parallax>
    );
};

export default Home;
