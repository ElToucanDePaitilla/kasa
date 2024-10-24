import React from 'react';


const Owner = ({ name, picture }) => {
  return (
    <div className="owner">
      <img src={picture} alt={`${name}`} className="owner__picture" />
      <p className="owner__name">{name}</p>
    </div>
  );
};

export default Owner;
