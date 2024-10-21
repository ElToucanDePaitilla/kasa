import { createBrowserRouter } from 'react-router-dom';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import RentalPage from './pages/RentalPage';
import NotFoundPage from './pages/NotFoundPage';

const Router = createBrowserRouter([
    {
      path: "/", // Ici une seule route, qui correspond à la racine de l'application ("/")
      element: <HomePage /> 
    },

    {
      path: "/about", // Ici une seule route, qui correspond à la racine de l'application ("/")
      element: <AboutPage /> 
    },
  
    {
      path: "/rental", // Ici une seule route, qui correspond à la racine de l'application ("/")
      element: <RentalPage /> 
    },

    {
      path: "*", // Route pour la gestion des erreurs 404 (page non trouvée)
      element: <NotFoundPage />,
    },


  ]);

  export default Router