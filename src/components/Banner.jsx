import React from "react";

const Banner = ({ imageSrc, title, bannerType }) => {
  
  return (
    <div 
      className={`banner banner-${bannerType}`} 
      style={{ backgroundImage: `url(${imageSrc})` }}
    >
      <h1>
        {title}
      </h1> 
    </div>
  );
};

export default Banner;


