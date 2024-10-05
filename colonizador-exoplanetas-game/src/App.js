import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
function App() {
  return (
    <div className="App">
      <Navbar />
      {/* quitar ese style cuando ya tengamos el home */}
      <main style={{ minHeight: '100vh', backgroundColor: 'black'}}>
      <ScrollToTop />
      <div style={{ height: '1500px' }}></div> {/* Esto crea espacio para scroll */}
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
