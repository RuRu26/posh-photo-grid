
import React, { useState } from 'react';
import { Video } from 'lucide-react';

const Gallery = () => {
  const [selectedMedia, setSelectedMedia] = useState<any>(null);

  const mediaItems = [
    {
      id: 1,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=2940&auto=format&fit=crop',
      alt: 'Mountain landscape',
      category: 'Landscape'
    },
    {
      id: 2,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?q=80&w=2940&auto=format&fit=crop',
      alt: 'Ocean waves',
      category: 'Nature'
    },
    {
      id: 3,
      type: 'video',
      src: 'https://images.unsplash.com/photo-1458668383970-8ddd3927deed?q=80&w=2940&auto=format&fit=crop',
      alt: 'Mountain video',
      category: 'Video'
    },
    {
      id: 4,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1504893524553-b855bce32c67?q=80&w=2940&auto=format&fit=crop',
      alt: 'River landscape',
      category: 'Landscape'
    },
    {
      id: 5,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1426604966848-d7adac402bff?q=80&w=2940&auto=format&fit=crop',
      alt: 'Rocky mountains',
      category: 'Nature'
    },
    {
      id: 6,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?q=80&w=2940&auto=format&fit=crop',
      alt: 'Forest sunbeam',
      category: 'Nature'
    },
    {
      id: 7,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2940&auto=format&fit=crop',
      alt: 'Lake surrounded by trees',
      category: 'Landscape'
    },
    {
      id: 8,
      type: 'video',
      src: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=2940&auto=format&fit=crop',
      alt: 'Mountain aerial view',
      category: 'Video'
    },
    {
      id: 9,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?q=80&w=2940&auto=format&fit=crop',
      alt: 'Green mountains',
      category: 'Landscape'
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
            My Portfolio
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A collection of my finest work spanning landscapes, portraits, events, and cinematic moments
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {mediaItems.map((item, index) => (
            <div
              key={item.id}
              className="break-inside-avoid relative group cursor-pointer overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500"
              onClick={() => setSelectedMedia(item)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                  {item.type === 'video' && (
                    <Video className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  )}
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {item.category}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedMedia && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedMedia(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            <img
              src={selectedMedia.src}
              alt={selectedMedia.alt}
              className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
            />
            <button
              onClick={() => setSelectedMedia(null)}
              className="absolute top-4 right-4 text-white bg-black/50 hover:bg-black/70 rounded-full p-2 transition-colors duration-200"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
