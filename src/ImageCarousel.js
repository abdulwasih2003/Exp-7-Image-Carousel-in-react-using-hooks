import React, { useState } from 'react';
import './ImageCarousel.css';

const ImageCarousel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const previousImage = () => {
    const newIndex = (currentImageIndex - 1 + images.length) % images.length;
    setCurrentImageIndex(newIndex);
  };

  const nextImage = () => {
    const newIndex = (currentImageIndex + 1) % images.length;
    setCurrentImageIndex(newIndex);
  };

  return (
    <div className="image-carousel">
      <button className="carousel-button" onClick={previousImage}>
        &lt;
      </button>
      <img
        className="carousel-image"
        src={images[currentImageIndex]}
        alt="Carousel"
      />
      <button className="carousel-button" onClick={nextImage}>
        &gt;
      </button>
    </div>
  );
};

export default ImageCarousel;
