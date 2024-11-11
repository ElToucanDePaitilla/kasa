import React, { useEffect, useState } from 'react';
import LogoHeader from '../assets/images/logos/LogoHeader.png';

const Header = () => {

    const [activeTab, setActiveTab] = useState('');useState('')

    useEffect(() => {
        const currentPath = window.location.pathname;
        if (currentPath === '/') {
            setActiveTab('accueil');
        } else if (currentPath === '/about') {
            setActiveTab('apropos');
        }
    }, []);

    return (
        <div className="header">
           
            <div className="logo-header">
                <a href="/"><img src={LogoHeader} alt="Kasa Logo" /></a>
            </div>
            
            <nav>
                <ul>
                    <li>
                        <a
                            href="/"
                            className={`nav-link ${activeTab === 'accueil' ? 'active' : ''}`}
                        >
                            Accueil
                        </a>
                    </li>

                    <li>
                        <a
                            href="/about"
                            className={`nav-link ${activeTab === 'apropos' ? 'active' : ''}`}
                        >
                            A Propos
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;
