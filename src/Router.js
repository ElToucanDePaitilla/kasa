import { createBrowserRouter } from 'react-router-dom';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import RentalDescriptionPage from './pages/RentalDescriptionPage';
import NotFoundPage from './pages/NotFoundPage';

const Router = createBrowserRouter([
    {
      path: "/", // Ici une seule route, qui correspond à la racine de l'application ("/")
      element: <HomePage /> 
    },

    {
      path: "/about",
      element: <AboutPage /> 
    },
  
    {
      path: "/rental",
      element: <RentalDescriptionPage /> 
    },

    {
      path: "*", // Route pour la gestion des erreurs 404 (page non trouvée)
      element: <NotFoundPage />,
    },


  ]);

  export default Router