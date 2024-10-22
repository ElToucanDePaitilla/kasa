import React, { useState } from "react";
import nextIcon from "../assets/images/carrousel/next.png";
import previousIcon from "../assets/images/carrousel/previous.png";

const Carrousel = ({ pictures }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Gérer le clic sur "Suivant"
  const handleNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === pictures.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Gérer le clic sur "Précédent"
  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carrousel-container" style={{ width: "1240px", height: "415px" }}>
      {pictures.length > 1 && (
        <img
          src={previousIcon}
          alt="Previous"
          className="carrousel-control prev"
          onClick={handlePrev}
        />
      )}
      <img
        src={pictures[currentImageIndex]}
        alt={`Slide ${currentImageIndex + 1}`}
        className="carrousel-image"
      />
      {pictures.length > 1 && (
        <img
          src={nextIcon}
          alt="Next"
          className="carrousel-control next"
          onClick={handleNext}
        />
      )}
      {pictures.length > 1 && (
        <div className="carrousel-pagination">
          {currentImageIndex + 1} / {pictures.length}
        </div>
      )}
    </div>
  );
};

export default Carrousel;
