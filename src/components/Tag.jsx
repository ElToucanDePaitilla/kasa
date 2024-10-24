import React from 'react';


const Tag = ({ tags }) => {
  if (!tags || !tags.length) {
    return null; // Ne rien afficher si les tags sont vides ou non définis
  }

  return (
    <div className="tags">
      {tags.map((tag, index) => (
        <span key={index} className="tag">
          {tag}
        </span>
      ))}
    </div>
  );
};

export default Tag;

