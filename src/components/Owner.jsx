import React from 'react';

const Owner = ({ name, picture }) => {
  return (
    <div className="owner">
      <div className="owner__name">{name}</div>
      <img className="owner__picture" src={picture} alt={name} />
    </div>
  );
};

export default Owner;
