import React, { useState } from 'react';
import OpenedClosedIcon from '../assets/images/collapse/OpenedClosed.png';

const CollapseItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  
  if (!content || !Array.isArray(content)) {
    return null; 
  }

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <button onClick={toggleCollapse} className="dropdown-btn">
        {title}
        {/* Utilisation de l'image pour l'icône */}
        <img 
          src={OpenedClosedIcon} 
          alt="Opened/Closed Icon" 
          className={`dropdown-icon ${isOpen ? 'rotate' : ''}`} 
        />
      </button>
      {/* Affichage du contenu si isOpen est true */}
      <div className={`dropdown-content ${isOpen ? 'show' : ''}`}>
        {/* Affichage du texte passé en content */}
        {content.length > 0 ? (
          <ul>
            {content.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        ) : (
          <p>Aucun contenu disponible</p>
        )}
      </div>
    </div>
  );
};

export default CollapseItem;
