import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Victory from './components/Victory';
import Defeat from './components/Defeat';

function App() {
  const [status, setStatus] = useState('victory'); // Cambia entre 'victory' y 'defeat'

  const handleContinue = () => {
    // Acción al hacer clic en continuar
    console.log('Continuar');
  };

  return (
    <div className="App">
      <main style={{ minHeight: '100vh', backgroundColor: 'black' }}>
        <ScrollToTop />
        {/* Renderiza la ventana de victoria o derrota */}
        {status === 'victory' ? <Victory onContinue={handleContinue} /> : <Defeat onContinue={handleContinue} />}
      </main>
    </div>
  );
}

export default App;
