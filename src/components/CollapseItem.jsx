import React, { useState } from 'react';
import OpenedClosedIcon from '../assets/images/collapse/OpenedClosed.png';
import '../styles/components/_collapseItem.scss'; // Importation du fichier SCSS

const CollapseItem = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="dropdown">
            <label className="dropdown-btn" onClick={toggleDropdown}>
                {title}
                <img
                    src={OpenedClosedIcon}
                    alt="Icone d'accordéon"
                    className={`dropdown-icon ${isOpen ? 'rotate' : ''}`}
                />
            </label>
            <div className={`dropdown-content ${isOpen ? 'show' : ''}`}>
                {content.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                ))}
            </div>
        </div>
    );
};

export default CollapseItem;

