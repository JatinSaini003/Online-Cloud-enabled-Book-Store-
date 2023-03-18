import React, { useState } from "react";
import "./style.css";

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  const handleNextClick = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };
  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="carousel-container">
      <img
        className="carousel-img"
        src={images[currentIndex]}
        alt="carousel slide"
      />
      <div className="carousel-dots">
        {images.map((image, index) => (
          <button
            key={index}
            className={`carousel-dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => handleDotClick(index)}
          ></button>
        ))}
      </div>
      <button className="carousel-btn left" onClick={handlePrevClick}>
        {"<"}
      </button>
      <button className="carousel-btn right" onClick={handleNextClick}>
        {">"}
      </button>
    </div>
  );
};

export default Carousel;