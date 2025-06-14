
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
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1649972904349-6e44c42644a7?q=80&w=2940&auto=format&fit=crop')`,
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-light mb-6 tracking-wide animate-fade-in">
          Capturing
          <span className="block font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
            Moments
          </span>
        </h1>
        <p className="text-xl md:text-2xl font-light mb-8 text-gray-200 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          Professional Photography & Videography Services
        </p>
        <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.6s' }}>
          Transforming your special moments into timeless memories through the art of visual storytelling
        </p>
        
        <button
          onClick={scrollToGallery}
          className="group inline-flex items-center space-x-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 hover:border-white/30 px-8 py-4 rounded-full transition-all duration-300 animate-fade-in"
          style={{ animationDelay: '0.9s' }}
        >
          <span className="text-lg">View My Work</span>
          <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
        </button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
