import React from 'react';
import Owner from './Owner';
import RateBar from './RateBar';
import Tag from './Tag';
import CollapseItem from './CollapseItem';

const RentalDescription = ({ rental }) => {
  return (
    <div className="rental-description">
      <div className="rental-header">
        <div className="left-container">
          <h2>{rental.title}</h2>
          <p>{rental.location}</p>
          <div className="rental-tags">
            {rental.tags && rental.tags.length > 0 ? (
              rental.tags.map((tag, index) => <Tag key={index} tag={tag} />)
            ) : (
              <p>Aucun tag disponible</p>
            )}
          </div>
        </div>
        <div className="right-container">
          <Owner name={rental.host.name} picture={rental.host.picture} />
          <RateBar rating={parseInt(rental.rating, 10)} />
        </div>
      </div>

      {/* Collapses */}
      <div className="collapse-container">
        <CollapseItem title="Description" content={[rental.description]} />
        <CollapseItem title="Équipements" content={rental.equipments} />
      </div>
    </div>
  );
};

export default RentalDescription;
