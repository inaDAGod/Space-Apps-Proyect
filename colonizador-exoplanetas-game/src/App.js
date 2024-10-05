import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* quitar ese style cuando ya tengamos el home */}
      <main style={{ minHeight: '100vh', backgroundColor: 'black'}}>
      </main>
      <Footer />
    </div>
  );
}

export default App;
