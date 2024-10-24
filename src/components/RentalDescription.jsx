import React from 'react';
import Owner from './Owner';
import RateBar from './RateBar';
import Tag from './Tag';
import CollapseItem from './CollapseItem';


const RentalDescription = ({ rental }) => {
  return (
    <div className="rental-description">
      <h1>{rental.title}</h1>
      <p>{rental.location}</p>
      <div className="rental-tags">
        {rental.tags.map((tag, index) => (
          <Tag key={index} tag={tag} />
        ))}
      </div>
      <div className="rental-owner-rate">
        <Owner name={rental.host.name} picture={rental.host.picture} />
        <RateBar rating={parseInt(rental.rating, 10)} />
      </div>
      <CollapseItem title="Description">
        <p>{rental.description}</p>
      </CollapseItem>
      <CollapseItem title="Équipements">
        <ul>
          {rental.equipments.map((equipment, index) => (
            <li key={index}>{equipment}</li>
          ))}
        </ul>
      </CollapseItem>
    </div>
  );
};

export default RentalDescription;

