import React from "react";
import GaleryItem from "./GalleryItem";
import rentalData from "../datas/rentals-list.json";

const Gallery = () => {
  return (
    <div className="gallery-container">
      <div className="gallery">
        {rentalData.map((bien) => (
          <GaleryItem key={bien.id} bien={bien} />
        ))}
      </div>
    </div>
  );
};

export default Gallery;