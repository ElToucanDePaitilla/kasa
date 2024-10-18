import React, { useState } from 'react';
import rentalsList from '../datas/rentals-list.json'; // Importer le fichier JSON directement

const Gallery = () => {
  const [biensImmoList] = useState(rentalsList); // Utilisation des données du fichier JSON

  return (
    <div className="gallery">
      {biensImmoList.map((bien) => (
        <div key={bien.id} className="gallery-item">
          <img src={bien.cover} alt={bien.title} className="gallery-img" />
          
          {/* Overlay dégradé */}
          <div className="gradient-overlay"></div>

          <div className="gallery-title-overlay">
            <h3>{bien.title}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Gallery;

