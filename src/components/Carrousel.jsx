import React, { useState } from "react";
// On importe React et le hook useState depuis la bibliothèque React.

import nextIcon from "../assets/images/carrousel/next.png";
import previousIcon from "../assets/images/carrousel/previous.png";
// On importe les icônes "next" et "previous" pour les boutons de navigation du carrousel.

const Carrousel = ({ pictures }) => {
  // Le composant Carrousel reçoit une prop "pictures", un tableau d'images à afficher.
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  // On utilise useState pour gérer l'index de l'image actuellement affichée.
  // Par défaut, cet index est initialisé à 0, donc on commence par la première image.

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === pictures.length - 1 ? 0 : prevIndex + 1
    );
    // handleNext est une fonction de gestion d'événement qui permet d'afficher l'image suivante.
    // Si l'image actuelle est la dernière du tableau (index == pictures.length - 1), 
    // on revient à la première image (index 0).
    // Sinon, on passe à l'image suivante (index + 1).
  };

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
    );
    // handlePrev est une fonction de gestion d'événement qui permet d'afficher l'image précédente.
    // Si l'image actuelle est la première du tableau (index == 0), 
    // on passe à la dernière image du tableau (index = pictures.length - 1).
    // Sinon, on passe à l'image précédente (index - 1).
  };

  return (
    <div className="carrousel-container">
      {/* On utilise une div pour contenir le carrousel, avec une classe pour le styliser */}

      {pictures.length > 1 && (
        <img
          src={previousIcon}
          alt="Previous"
          className="carrousel-control prev"
          onClick={handlePrev}
        />
      )}
      {/* Si le tableau "pictures" contient plus d'une image, 
          on affiche le bouton pour l'image précédente, avec un écouteur d'événement "onClick" 
          qui appelle la fonction handlePrev */}

      <img
        src={pictures[currentImageIndex]}
        alt={`Slide ${currentImageIndex + 1}`}
        className="carrousel-image"
      />
      {/* On affiche l'image courante, en utilisant l'index actuel du tableau "pictures" pour déterminer l'image.
          La balise alt est dynamique et indique le numéro de la diapositive courante pour l'accessibilité. */}

      {pictures.length > 1 && (
        <img
          src={nextIcon}
          alt="Next"
          className="carrousel-control next"
          onClick={handleNext}
        />
      )}
      {/* De même, si le tableau "pictures" contient plus d'une image, 
          on affiche le bouton pour l'image suivante, avec un écouteur d'événement "onClick" 
          qui appelle la fonction handleNext */}

      {pictures.length > 1 && (
        <div className="carrousel-pagination">
          {currentImageIndex + 1} / {pictures.length}
        </div>
      )}
      {/* Si le tableau "pictures" contient plus d'une image, 
          on affiche une pagination indiquant le numéro de l'image actuelle et le nombre total d'images */}
    </div>
  );
};

export default Carrousel;
// On exporte le composant Carrousel pour pouvoir l'utiliser dans d'autres parties de l'application.

