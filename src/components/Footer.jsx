import React from 'react';
import LogoFooter from '../assets/images/logos/LogoFooter.png';

const Footer = () => {
    return (       
        <div className="footer">
            <div className="logo-footer">
                <img src={LogoFooter} alt="Kasa Logo"/>              
            </div>
            <p className="footer-text">&copy; 2023 Kasa. All<span className="line-break"> rights reserved</span></p> 
        </div>  
    );
};

export default Footer;

