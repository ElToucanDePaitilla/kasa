import React from 'react';
import './styles/styles.scss';
import './styles/app.scss';
import {
  RouterProvider // Composant React qui enveloppe l'application pour y injecter les routes.
} from "react-router-dom";
import Router from "./Router";

// Définition des routes:

// function App() : C'est une fonction qui définit le composant principal de l'application (appelé App). En React, les composants sont des fonctions qui retournent des éléments à afficher.
function App() {
  return (
    <div className="App">
      <React.StrictMode>
        <RouterProvider router={Router} />
      </React.StrictMode>
    </div>
  );
}

// NOTA:

// </React.StrictMode> : outil de développement fourni par React qui aide à détecter des problèmes potentiels dans le code
// erreurs communes, effets de bord, mise à jour de React
// "router" est le nom de la propriété que le composant <RouterProvider /> attend pour fonctionner.
// "Router" est un objet de configuration qui contient une liste de routes
// "Router" est la valeur que l'on passe à la prop "router"




// <RouterProvider>: c'est un composant qui gère le système de navigation;
// Il prend la propriété router={router}, ce qui signifie
// qu'il injecte le routeur et donc la logique de navigation dans l'application.

export default App;
