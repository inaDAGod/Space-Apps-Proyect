import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import './Home.css';
import TextBlock from './textBlock';
import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Home = () => {
    const navigate = useNavigate();


    const handleButtonClick = () => {
        navigate('/game');
    };

    return (
        <div>
            {/* Navbar */}
            <audio src={'/inicio_musica.mp3'} autoPlay loop />
            <main style={{ minHeight: '633px', backgroundColor: '#0c1428' }}>
                {/* Parallax */}
                <Parallax pages={3} style={{ top: '0', left: '0' }} className="animation">
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
                            <button className="Button" id="BOTON" onClick={handleButtonClick}>
                                JUGAR
                            </button>
                        </div>
                    </ParallaxLayer>
                    <ParallaxLayer offset={1} speed={0.25}>
                        <TextBlock />
                        <Footer />
                    </ParallaxLayer>
                </Parallax>
            </main>
        </div>
    );
};

export default Home;
