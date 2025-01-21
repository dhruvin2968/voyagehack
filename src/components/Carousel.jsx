import React from 'react';
const images = [
  '/e.jpg',
  '/b.jpg',
  '/c.jpg',
  '/d.jpg',
];

const Carousel= () => {
  return (
    <div className="masonry-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
       {images.map((image, index) => (
        <div key={index} className="masonry-item bg-gray-900 rounded-lg overflow-hidden">
          <img src={image} alt="" className="w-full h-full object-cover" />
        </div>
      ))}
    </div>
  );
};

export default Carousel;
