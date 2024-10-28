import React, { useEffect, useState } from 'react'; // Importation des hooks React useEffect et useState
import LogoHeader from '../assets/images/logos/LogoHeader.png'; // Importation du logo

// Déclaration du composant Header
const Header = () => {
    // État pour suivre l'onglet actif dans le menu de navigation
    const [activeTab, setActiveTab] = useState('');

    // Hook useEffect pour mettre à jour l'onglet actif en fonction de l'URL actuelle
    useEffect(() => {
        const currentPath = window.location.pathname; // Obtient le chemin de l'URL actuelle

        // Détermine l'onglet actif selon le chemin
        if (currentPath === '/') {
            setActiveTab('accueil'); // Définit "accueil" comme onglet actif si le chemin est la page d'accueil
        } else if (currentPath === '/about') {
            setActiveTab('apropos'); // Définit "apropos" comme onglet actif si le chemin est la page "À Propos"
        }
    }, []); // Le tableau de dépendances vide [] signifie que ce code s'exécute uniquement lors du montage initial du composant

    return (
        <div className="header">
            {/* Section du logo */}
            <div className="logo-header">
                <a href="/"><img src={LogoHeader} alt="Kasa Logo" /></a> {/* Lien vers l'accueil avec le logo */}
            </div>
            
            {/* Navigation du menu */}
            <nav>
                <ul>
                    {/* Lien vers la page Accueil */}
                    <li>
                        <a
                            href="/"
                            className={`nav-link ${activeTab === 'accueil' ? 'active' : ''}`} // Ajoute la classe "active" si l'onglet actif est "accueil"
                        >
                            Accueil
                        </a>
                    </li>

                    {/* Lien vers la page À Propos */}
                    <li>
                        <a
                            href="/about"
                            className={`nav-link ${activeTab === 'apropos' ? 'active' : ''}`} // Ajoute la classe "active" si l'onglet actif est "apropos"
                        >
                            A Propos
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Header; // Exportation du composant pour l'utiliser dans d'autres parties de l'application
