
import React from 'react';
import { Camera } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-center space-x-3 mb-6">
              <Camera className="w-8 h-8 text-yellow-500" />
              <h2 className="text-3xl md:text-4xl font-light text-gray-900">
                About Me
              </h2>
            </div>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              I'm a passionate photographer and videographer with over 5 years of experience 
              capturing life's most precious moments. My approach combines artistic vision with 
              technical expertise to create stunning visual narratives.
            </p>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              Whether it's an intimate wedding, corporate event, or creative portrait session, 
              I bring dedication, creativity, and professionalism to every project. My goal is 
              to not just document moments, but to create timeless art that tells your unique story.
            </p>

            <div className="grid grid-cols-2 gap-8 pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-500 mb-2">150+</div>
                <div className="text-gray-600">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-500 mb-2">5+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2940&auto=format&fit=crop"
                alt="Photographer at work"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
