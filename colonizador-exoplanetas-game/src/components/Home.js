import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import './Home.css';
import React from 'react'

const Home = () => {
    return (
        <Parallax pages={2} style={{ top: '0', left: '0' }} class="animation">
          <ParallaxLayer offset={0} speed={2.5}>
            <div class="animation_layer parallax" id="ESPACIO"></div>
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={2.5}>
            <div class="animation_layer parallax" id="NAVE"></div>
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={2.5}>
            <div class="animation_layer parallax" id="NEBULOSA1"></div>
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={2.5}>
            <div class="animation_layer parallax" id="NEBULOSA1"></div>
          </ParallaxLayer>
        </Parallax>
    )
}

export default Home