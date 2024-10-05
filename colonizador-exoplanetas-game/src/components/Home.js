import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import './Home.css';
import TextBlock from './textBlock';
import React from 'react'

const Home = () => {
    return (
        <Parallax pages={2} style={{ top: '0', left: '0' }} class="animation">
          <ParallaxLayer offset={0} speed={0.25}>
            <div class="animation_layer parallax" id="ESPACIO"></div>
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={0.40}>
            <div class="animation_layer parallax" id="NEBULOSA1"></div>
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={0.5}>
            <div class="animation_layer parallax" id="NEBULOSA2"></div>
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={0.35}>
            <div class="animation_layer parallax" id="NAVE"></div>
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={0.25}>
            <div class="animation_layer parallax" id="PLANETA"></div>
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={0.25}>
            <div class="animation_layer parallax" id="HUMO"></div>
          </ParallaxLayer>
          <ParallaxLayer offset={1} speed={0.25}>
            <TextBlock />
          </ParallaxLayer>
        </Parallax>
    )
}

export default Home