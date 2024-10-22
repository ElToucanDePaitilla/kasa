import React from 'react';
import '../styles/components/_footer.scss';
import LogoFooter from '../assets/images/logos/LogoFooter.png';

const Footer = () => {
    return (       
        <div className="footer">
            <div class="logo-footer">
                <img src={LogoFooter} alt="Kasa Logo"/>              
            </div>
            <p>&copy; 2023 Kasa. All rights reserved</p> 
        </div>  
    );
};

export default Footer;