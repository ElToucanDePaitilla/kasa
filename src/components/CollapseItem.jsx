import React, { useState } from 'react';
// Importation de React ainsi que du hook useState depuis la bibliothèque React.
import OpenedClosedIcon from '../assets/images/collapse/OpenedClosed.png';
// Importation de l'icône qui sera utilisée pour indiquer l'état ouvert/fermé du composant CollapseItem.

const CollapseItem = ({ title, content }) => {
  // Le composant CollapseItem reçoit deux props : "title" et "content".
  // "title" représente le titre de l'élément collapsible, et "content" représente son contenu.

  const [isOpen, setIsOpen] = useState(false);
  // Utilisation de useState pour gérer l'état d'ouverture ou de fermeture du contenu.
  // Par défaut, "isOpen" est initialisé à false, donc le contenu est fermé au chargement initial.

  if (!content || !Array.isArray(content)) {
    return null; 
  }
  // Vérification que "content" est bien défini et qu'il s'agit d'un tableau.
  // Si "content" est indéfini ou n'est pas un tableau, le composant ne renvoie rien (null).

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };
  // La fonction toggleCollapse permet de changer l'état "isOpen" entre true et false.
  // Lorsqu'elle est appelée, elle inverse la valeur actuelle de "isOpen" (ouvert/fermé).

  return (
    <div className="dropdown">
      <button onClick={toggleCollapse} className="dropdown-btn">
        {title}
        {/* Affichage du titre passé en prop "title" dans le bouton. */}
        
        {/* Affichage de l'icône pour indiquer l'état ouvert ou fermé */}
        <img 
          src={OpenedClosedIcon} 
          alt="Opened/Closed Icon" 
          className={`dropdown-icon ${isOpen ? 'rotate' : ''}`} 
        />
        {/* L'image utilise la source "OpenedClosedIcon" et l'alt "Opened/Closed Icon".
            La classe "rotate" est ajoutée dynamiquement si "isOpen" est true, pour styliser l'icône (par exemple, la faire tourner). */}
      </button>

      {/* Affichage conditionnel du contenu en fonction de l'état "isOpen" */}
      <div className={`dropdown-content ${isOpen ? 'show' : ''}`}>
        {/* La classe "show" est appliquée dynamiquement lorsque "isOpen" est true, 
            permettant d'afficher ou de masquer le contenu selon l'état ouvert/fermé. */}
        
        {content.length > 0 ? (
          <ul>
            {content.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        ) : (
          <p>Aucun contenu disponible</p>
        )}
        {/* Si "content" contient des éléments, on les affiche sous forme de liste (<ul>).
            - Chaque élément du tableau "content" est rendu dans un <li> (élément de liste).
            - On utilise l'attribut "key" avec l'index de chaque élément pour aider React à gérer efficacement la liste.
            Si "content" est vide, on affiche un message alternatif "Aucun contenu disponible". */}
      </div>
    </div>
  );
};

export default CollapseItem;
// Exportation du composant CollapseItem pour qu'il puisse être utilisé dans d'autres parties de l'application.
