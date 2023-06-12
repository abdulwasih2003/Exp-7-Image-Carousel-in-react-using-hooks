import React from 'react';
import ImageCarousel from './ImageCarousel';
import './App.css';

const App = () => {
  const images = [
    'https://picsum.photos/id/237/200/300',
    'https://picsum.photos/seed/picsum/200/300',
    'https://picsum.photos/200/300?grayscale',
  ];

  return (
    <div className="app">
      <h1>Image Carousel</h1>
      <ImageCarousel images={images} />
    </div>
  );
};

export default App;
