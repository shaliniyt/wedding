import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Couple from './components/Couple';
import Events from './components/Events';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

import FloatingPetals from './components/FloatingPetals';

function App() {
  return (
    <div className="App">
      <FloatingPetals />
      <Navbar />
      <Hero />
      <Couple />
      <Events />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
