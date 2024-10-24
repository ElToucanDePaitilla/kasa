import React from 'react';
import starActive from '../assets/images/star-rating-bar/star-active.png';
import starInactive from '../assets/images/star-rating-bar/star-inactive.png';

const RateBar = ({ rating }) => {
  const maxRating = 5;
  const stars = Array.from({ length: maxRating }, (_, i) => (
    <img
      key={i}
      src={i < rating ? starActive : starInactive}
      alt={i < rating ? 'Active star' : 'Inactive star'}
    />
  ));

  return <div className="rate-bar">{stars}</div>;
};

export default RateBar;
