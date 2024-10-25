import React, { useEffect, useState } from 'react';
import '../styles/components/_header.scss';
import LogoHeaderBig from '../assets/images/logos/LogoHeaderBig.png';

const Header = () => {
    // État pour suivre l'onglet actif
    const [activeTab, setActiveTab] = useState('');

    // Définir l'onglet actif en fonction de l'URL actuelle
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
                <a href="/"><img src={LogoHeaderBig} alt="Kasa Logo" /></a>
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
