
import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToGallery = () => {
    const element = document.getElementById('gallery');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-white">
      {/* Content */}
      <div className="relative z-10 text-center text-black px-6 max-w-4xl mx-auto">
        <h1 className="text-6xl md:text-8xl font-light mb-8 tracking-tight leading-none">
          Photography
        </h1>
        <p className="text-lg md:text-xl font-light mb-12 text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Capturing life's fleeting moments with artistic vision and technical precision
        </p>
        
        <button
          onClick={scrollToGallery}
          className="group inline-flex items-center space-x-3 text-black hover:text-gray-600 transition-colors duration-300 text-sm uppercase tracking-widest"
        >
          <span>View Work</span>
          <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform duration-300" />
        </button>
      </div>

      {/* Minimal scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-px h-12 bg-gray-300"></div>
      </div>
    </section>
  );
};

export default Hero;
