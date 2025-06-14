
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md border-b border-gray-100' : 'bg-white'
    }`}>
      <div className="max-w-7xl mx-auto px-8 py-6">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-light text-black tracking-wide">Ruhi Chetia</h1>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-12">
            <button
              onClick={() => scrollToSection('gallery')}
              className="text-sm text-gray-600 hover:text-black transition-colors duration-200 uppercase tracking-widest"
            >
              Work
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-sm text-gray-600 hover:text-black transition-colors duration-200 uppercase tracking-widest"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-sm text-gray-600 hover:text-black transition-colors duration-200 uppercase tracking-widest"
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-black hover:text-gray-600"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-8 pb-6 space-y-6 border-t border-gray-100 pt-6">
            <button
              onClick={() => scrollToSection('gallery')}
              className="block w-full text-left text-sm text-gray-600 hover:text-black transition-colors duration-200 uppercase tracking-widest"
            >
              Work
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left text-sm text-gray-600 hover:text-black transition-colors duration-200 uppercase tracking-widest"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left text-sm text-gray-600 hover:text-black transition-colors duration-200 uppercase tracking-widest"
            >
              Contact
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
