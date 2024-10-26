import React from "react";
import { Link } from "react-router-dom";

const GalleryItem = (props) => {
  return (
    <Link to={`/rental/${props.bien.id}`} className="gallery-item">
      <div key={props.bien.id}>
          <img
            src={props.bien.cover}
            alt={props.bien.title}
          />

          {/* Overlay dégradé */}
          <div className="gradient-overlay"></div>

          <div className="gallery-item-title-overlay">
            <h3>{props.bien.title}</h3>
          </div>
      </div>
    </Link>
  );
};

export default GalleryItem;
