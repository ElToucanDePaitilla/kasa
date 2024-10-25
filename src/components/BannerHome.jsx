import React from 'react';
//import '../styles/components/_banners.scss';
import ImageHeaderHome from '../assets/images/banner/ImageHeaderHome.png';

const BannerHome = () => {
    return (       
        <div className="banner banner-home opacity-home">
            <h1>Chez vous, partout et ailleurs</h1>
            <img className="position-img-home" src={ImageHeaderHome} alt="Bannière" />
            
        </div>
    );
};

export default BannerHome;
