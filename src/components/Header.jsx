import React from 'react';
import '../styles/components/_header.scss';
import LogoHeaderBig from '../assets/images/logos/LogoHeaderBig.png';

const Header = () => {
    return (       
        <div className="header">
                <div className="logo-header">
                    <a href="/"><img src={LogoHeaderBig} alt="Kasa Logo"/></a>
                </div>
                <nav>
                    <ul>
                        <li><a href="/">Accueil</a></li>
                        <li><a href="/about">A Propos</a></li>
                    </ul>
                </nav>
        
         </div>  
    );
};

export default Header;
