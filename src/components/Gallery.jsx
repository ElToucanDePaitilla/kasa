import React, { useState } from 'react';
import rentalsList from '../datas/rentals-list.json'; // Importer le fichier JSON directement
import GaleryItem from './GaleryItem.jsx'

const Gallery = () => {
  const [biensImmoList] = useState(rentalsList); // Utilisation des données du fichier JSON

  return (
    <div className="gallery">
      {biensImmoList.map((bien) => (
       <GaleryItem bien={bien} key={bien.id}/>
      ))}
    </div>
  );
};

export default Gallery;

