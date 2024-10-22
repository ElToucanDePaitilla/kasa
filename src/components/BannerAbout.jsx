import React from 'react';
import '../styles/components/_banners.scss';
import ImageHeaderAbout from '../assets/images/banner/ImageHeaderAbout.png';

const BannerAbout = () => {
    return (       
        <div className="banner banner-about opacity-about">
            <img className="position-img-about" src={ImageHeaderAbout} alt="Bannière" />
        </div>
    );
};

export default BannerAbout;
