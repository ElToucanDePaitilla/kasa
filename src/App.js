import './Style.scss';
import './App.scss';
import React from 'react'; // Bibliothèque principale pour créer des interfaces utilisateur.
import {
  createBrowserRouter, // Crée un objet "routeur" basé sur les chemins définis.
  RouterProvider, // Composant React qui enveloppe l'application pour y injecter les routes.
} from "react-router-dom";

import BannerHome from './components/BannerHome';
import BannerAbout from './components/BannerAbout';
import Header from './components/Header';
import Footer from './components/Footer';
import NotFoundPage from './components/NotFoundPage';
import Gallery from './components/Gallery';


// Définition des routes:
const router = createBrowserRouter([
  {
    path: "/", // Ici une seule route, qui correspond à la racine de l'application ("/")
    element: (
      <div>
        <Header />
        <BannerHome />
        <Gallery />
        <Footer />
      </div>
    ), // Lorsque l'utilisateur navigue sur cette route l'élément est "rendu".
  },
  {
    path: "*", // Route pour la gestion des erreurs 404 (page non trouvée)
    element: <NotFoundPage />,
  },
]);

function App() {
  return (
    <div className="App">
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    </div>
  );
}

// NOTA:
// </React.StrictMode> : composant d'assistance qui active des vérifications et avertissements supplémentaires en mode développement pour détecter des erreurs potentiellement problématiques dans le code React.
// RouterProvider: C'est ici que le routeur défini précédemment est appliqué à l'application. Il prend la propriété router={router}, ce qui signifie qu'il injecte le routeur et donc la logique de navigation dans l'application.

export default App;
