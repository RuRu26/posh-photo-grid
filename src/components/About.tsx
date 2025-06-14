
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-32 bg-white">
      <div className="max-w-6xl mx-auto px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          <div>
            <h2 className="text-4xl md:text-6xl font-light text-black mb-12 tracking-tight">
              About
            </h2>
          </div>
          
          <div className="space-y-8">
            <p className="text-lg text-gray-600 leading-relaxed font-light">
              I am a photographer dedicated to capturing the essence of life through my lens. 
              My work focuses on the beauty found in both intimate moments and grand landscapes, 
              always seeking to tell a compelling visual story.
            </p>
            
            <p className="text-lg text-gray-600 leading-relaxed font-light">
              With over five years of experience, I specialize in creating timeless imagery 
              that resonates with authenticity and emotion. Each project is approached with 
              meticulous attention to detail and a deep understanding of light and composition.
            </p>

            <div className="pt-8">
              <div className="grid grid-cols-2 gap-12">
                <div>
                  <div className="text-2xl font-light text-black mb-2">150+</div>
                  <div className="text-sm text-gray-500 uppercase tracking-widest">Projects</div>
                </div>
                <div>
                  <div className="text-2xl font-light text-black mb-2">5+</div>
                  <div className="text-sm text-gray-500 uppercase tracking-widest">Years</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
