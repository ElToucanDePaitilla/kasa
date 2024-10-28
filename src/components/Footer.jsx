import React from 'react';
import '../styles/components/_footer.scss';
import LogoFooter from '../assets/images/logos/LogoFooter.png';

const Footer = () => {
    return (       
        <div className="footer">
            <div className="logo-footer">
                <img src={LogoFooter} alt="Kasa Logo"/>              
            </div>
            <p className="footer-text">&copy; 2023 Kasa.<span className="line-break"> All rights reserved</span></p> 
        </div>  
    );
};

export default Footer;

