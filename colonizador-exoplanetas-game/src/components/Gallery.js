import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import exoplanetas from '../data/exoplanetas'; // Importa tus datos de planetas

const Gallery = () => {
  const mountRef = useRef(null);
  const [selectedPlanet, setSelectedPlanet] = useState(null);
  const [clickPosition, setClickPosition] = useState({ x: 0, y: 0 }); // Estado para almacenar la posición del clic

  useEffect(() => {
    // Configuración inicial de escena, cámara y renderizador
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);
  
    // Añadir luz a la escena
    const light = new THREE.AmbientLight(0xffffff); // Luz blanca
    scene.add(light);
  
    // Luz direccional para iluminar los planetas
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(10, 10, 10);
    scene.add(directionalLight);
  
    // Cargar las texturas para los planetas
    const textureLoader = new THREE.TextureLoader();
  
    // Crear planetas con texturas
    exoplanetas.forEach((planet) => {
      const geometry = new THREE.SphereGeometry(2, 32, 32); // Cambia el radio de 0.5 a 2 o el tamaño que desees
      const texture = textureLoader.load(`./${planet.imagen}`); // Carga la textura de la imagen
      const material = new THREE.MeshStandardMaterial({
        map: texture, // Aplica la textura al material
      });
  
      const planetMesh = new THREE.Mesh(geometry, material);
  
      // Posicionamiento aleatorio de los planetas
      planetMesh.position.set(
        Math.random() * 40 - 20, // Random entre -20 y 20 en el eje X
        Math.random() * 40 - 20, // Random entre -20 y 20 en el eje Y
        Math.random() * 40 - 20  // Random entre -20 y 20 en el eje Z
      );
      planetMesh.name = planet.nombre; // Asignar el nombre del planeta
      planetMesh.userData = planet; // Guardar los datos del planeta en el objeto
  
      // Añadir el planeta a la escena
      scene.add(planetMesh);
    });
  
    // Posicionar la cámara un poco más lejos
    camera.position.z = 50;
  
    // Configurar controles de órbita
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;  // Movimiento suave
    controls.dampingFactor = 0.25;
    controls.enableZoom = true;  // Permitir zoom con la rueda del mouse
    controls.autoRotate = true;  // Rotación automática
    controls.autoRotateSpeed = 0.5; // Velocidad de la rotación automática
  
    // Aquí añadimos el raycaster y el evento de clic
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();
  
    const onMouseClick = (event) => {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
  
      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(scene.children);
      
      if (intersects.length > 0) {
        const selectedPlanet = intersects[0].object.userData;
        setSelectedPlanet(selectedPlanet); // Guardar el planeta seleccionado
        setClickPosition({ x: event.clientX, y: event.clientY }); // Guardar posición del clic
      } else {
        setSelectedPlanet(null); // Ocultar la tarjeta si no se hace clic en un planeta
      }
    };
  
    window.addEventListener('click', onMouseClick);
  
    // Función de animación
    const animate = () => {
      requestAnimationFrame(animate);
      controls.update(); // Actualiza los controles
      renderer.render(scene, camera);
    };
  
    animate();
  
    // Limpiar los eventos y la escena al desmontar el componente
    return () => {
      window.removeEventListener('click', onMouseClick);
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);
  

  return (
    <div>
      <div ref={mountRef} style={{ width: '100vw', height: '100vh' }} />

      {selectedPlanet && (
        <div
          className="planet-info"
          style={{
            position: 'absolute',
            left: clickPosition.x + 'px',
            top: clickPosition.y + 'px',
            background: 'rgba(0, 0, 0, 0.7)',
            color: 'white',
            padding: '10px',
            borderRadius: '8px',
            pointerEvents: 'none', // Para que no interfiera con otros clics
          }}
        >
          <h2>{selectedPlanet.nombre}</h2>
          <p>{`Periodo Orbital:: ${selectedPlanet.PeriodoOrbital}`} dias</p>
          <p>{`Distancia Tierra: ${selectedPlanet.Distancia}`} parcecs</p>
          <p>{`Luminosidad Estelar: ${selectedPlanet.LuminosidadEstelar}`} log(solar)</p>
          <p>{`Numeros de estrellas: ${selectedPlanet.NumeroDeEstrellas}`}</p>
        </div>
      )}
    </div>
  );
};

export default Gallery;
