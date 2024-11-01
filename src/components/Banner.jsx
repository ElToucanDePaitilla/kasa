// Banner.jsx

import React from "react";
import "../styles/components/_banners.scss";

// Déclaration du composant Banner qui reçoit trois props : imageSrc, title, et bannerType
const Banner = ({ imageSrc, title, bannerType }) => {
  
  return (
    <div 
      // Définition de la classe CSS dynamique en fonction du type de bannière reçu dans la prop `bannerType`
      // On ajoute aussi un style inline pour définir l'image de fond avec l'URL fournie par `imageSrc`
      className={`banner banner-${bannerType}`} 
      style={{ backgroundImage: `url(${imageSrc})` }}
    >
      {/* Titre de la bannière */}
      <h1 className={`${bannerType}-title`}>
        {title} {/* Texte du titre de la bannière */}
      </h1> 

    </div>
  );
};

// Exportation du composant Banner pour qu'il puisse être utilisé dans d'autres fichiers
export default Banner;


