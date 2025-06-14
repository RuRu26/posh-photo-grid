
import React, { useState } from 'react';

const Gallery = () => {
  const [selectedMedia, setSelectedMedia] = useState<any>(null);

  const mediaItems = [
    {
      id: 1,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=2940&auto=format&fit=crop',
      alt: 'Mountain landscape',
    },
    {
      id: 2,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?q=80&w=2940&auto=format&fit=crop',
      alt: 'Ocean waves',
    },
    {
      id: 3,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1458668383970-8ddd3927deed?q=80&w=2940&auto=format&fit=crop',
      alt: 'Mountain video',
    },
    {
      id: 4,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1504893524553-b855bce32c67?q=80&w=2940&auto=format&fit=crop',
      alt: 'River landscape',
    },
    {
      id: 5,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1426604966848-d7adac402bff?q=80&w=2940&auto=format&fit=crop',
      alt: 'Rocky mountains',
    },
    {
      id: 6,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?q=80&w=2940&auto=format&fit=crop',
      alt: 'Forest sunbeam',
    },
    {
      id: 7,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2940&auto=format&fit=crop',
      alt: 'Lake surrounded by trees',
    },
    {
      id: 8,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=2940&auto=format&fit=crop',
      alt: 'Mountain aerial view',
    },
    {
      id: 9,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?q=80&w=2940&auto=format&fit=crop',
      alt: 'Green mountains',
    }
  ];

  return (
    <section id="gallery" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <div className="mb-20">
          <h2 className="text-4xl md:text-6xl font-light text-black tracking-tight">
            Selected Work
          </h2>
        </div>

        {/* Clean Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200">
          {mediaItems.map((item, index) => (
            <div
              key={item.id}
              className="aspect-square bg-white cursor-pointer group overflow-hidden"
              onClick={() => setSelectedMedia(item)}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Minimal Lightbox */}
      {selectedMedia && (
        <div 
          className="fixed inset-0 bg-white z-50 flex items-center justify-center p-8"
          onClick={() => setSelectedMedia(null)}
        >
          <div className="relative max-w-5xl max-h-full">
            <img
              src={selectedMedia.src}
              alt={selectedMedia.alt}
              className="w-full h-auto max-h-[85vh] object-contain"
            />
            <button
              onClick={() => setSelectedMedia(null)}
              className="absolute top-4 right-4 text-black hover:text-gray-600 text-2xl font-light transition-colors duration-200"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
