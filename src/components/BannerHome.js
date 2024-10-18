import React from 'react';
//import '../styles/components/_banners.scss';
import ImageHeaderHome from '../assets/images/banner/ImageHeaderHome.png';

const BannerHome = () => {
    return (       
        <div className="banner banner-home opacity-home">
            <img className="position-img-home" src={ImageHeaderHome} alt="Bannière" />
            <h1>Chez vous, partout et ailleurs</h1>
        </div>
    );
};

export default BannerHome;
