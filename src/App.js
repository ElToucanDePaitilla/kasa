import './styles/styles.scss';
import './styles/app.scss';
import React from 'react';
import {
  RouterProvider, // Composant React qui enveloppe l'application pour y injecter les routes.
} from "react-router-dom";
import Router from "./Router.js"

// Définition des routes:

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

// </React.StrictMode> : composant d'assistance qui active des vérifications
// et avertissements supplémentaires en mode développement pour détecter des
// erreurs potentiellement problématiques dans le code React.

// RouterProvider: C'est ici que le routeur défini précédemment est appliqué
// à l'application. Il prend la propriété router={router}, ce qui signifie
// qu'il injecte le routeur et donc la logique de navigation dans l'application.

export default App;
