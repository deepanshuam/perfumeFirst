// src/components/ImagesGallery.js
import React, { useState } from 'react';
import './ImagesGallery.css'; // Assuming you have a CSS file for styling

const ImagesGallery = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="images-gallery">
      <div className="main-image">
        <img src={selectedImage} alt="Selected" />
      </div>
      <div className="thumbnail-images">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Thumbnail ${index}`}
            onClick={() => setSelectedImage(image)}
            className={image === selectedImage ? 'selected' : ''}
          />
        ))}
      </div>
    </div>
  );
};

export default ImagesGallery;
