import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import RentalDescriptionPage from "./pages/RentalDescriptionPage";
import NotFoundPage from "./pages/NotFoundPage";


// createBrowserRouter est une fonction fournie par la bibliothèque React Router
// pour configurer le routage de l'application.
// Elle fait partie de react-router-dom,
// qui est la version de React Router utilisée dans les applications React destinées à fonctionner dans un navigateur.



const Router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/rental/:id", // Route dynamique avec paramètre d'ID
    element: <RentalDescriptionPage />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

export default Router;
