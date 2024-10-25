// Banner.jsx
import React from "react";
import "../styles/components/_banners.scss"; // Importation des styles SCSS

const Banner = ({ imageSrc, title, bannerType }) => {
  return (
    <div className={`banner banner-${bannerType}`} style={{ backgroundImage: `url(${imageSrc})` }}>
      <h1 className={`${bannerType}-title`}>{title}</h1> {/* Classe dynamique pour le titre */}
    </div>
  );
};

export default Banner;

