
import React, { useState } from 'react';

const Gallery = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const projects = [
    {
      id: 1,
      title: 'Urban Landscapes',
      category: 'Architecture',
      coverImage: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=2940&auto=format&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=2940&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2940&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=2940&auto=format&fit=crop'
      ]
    },
    {
      id: 2,
      title: 'Natural Beauty',
      category: 'Landscape',
      coverImage: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=2940&auto=format&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=2940&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?q=80&w=2940&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1504893524553-b855bce32c67?q=80&w=2940&auto=format&fit=crop'
      ]
    },
    {
      id: 3,
      title: 'Intimate Moments',
      category: 'Portrait',
      coverImage: 'https://images.unsplash.com/photo-1494790108755-2616c398aedb?q=80&w=2940&auto=format&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1494790108755-2616c398aedb?q=80&w=2940&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2940&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=2940&auto=format&fit=crop'
      ]
    },
    {
      id: 4,
      title: 'Mountain Serenity',
      category: 'Landscape',
      coverImage: 'https://images.unsplash.com/photo-1426604966848-d7adac402bff?q=80&w=2940&auto=format&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1426604966848-d7adac402bff?q=80&w=2940&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1458668383970-8ddd3927deed?q=80&w=2940&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2940&auto=format&fit=crop'
      ]
    }
  ];

  return (
    <>
      <section id="gallery" className="pt-24 pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gray-100">
            {projects.map((project) => (
              <div
                key={project.id}
                className="aspect-[4/3] bg-white cursor-pointer group overflow-hidden relative"
                onClick={() => setSelectedProject(project)}
              >
                <img
                  src={project.coverImage}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center text-white">
                    <h3 className="text-2xl font-light mb-2">{project.title}</h3>
                    <p className="text-sm uppercase tracking-widest">{project.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 bg-white z-50 overflow-y-auto"
          onClick={() => setSelectedProject(null)}
        >
          <div className="min-h-screen p-8">
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="fixed top-8 right-8 text-black hover:text-gray-600 text-2xl font-light transition-colors duration-200 z-10"
            >
              ×
            </button>

            {/* Project Header */}
            <div className="max-w-4xl mx-auto mb-12 pt-16">
              <h2 className="text-4xl md:text-6xl font-light text-black mb-4 tracking-tight">
                {selectedProject.title}
              </h2>
              <p className="text-sm text-gray-500 uppercase tracking-widest">
                {selectedProject.category}
              </p>
            </div>

            {/* Project Images */}
            <div className="max-w-6xl mx-auto space-y-12">
              {selectedProject.images.map((image: string, index: number) => (
                <div key={index} className="w-full">
                  <img
                    src={image}
                    alt={`${selectedProject.title} ${index + 1}`}
                    className="w-full h-auto object-cover"
                    onClick={(e) => e.stopPropagation()}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;
