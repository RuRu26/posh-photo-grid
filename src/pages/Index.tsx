
import React from 'react';
import Gallery from '../components/Gallery';
import About from '../components/About';
import Contact from '../components/Contact';
import Navigation from '../components/Navigation';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Gallery />
      <About />
      <Contact />
    </div>
  );
};

export default Index;
