import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import RentalDescriptionPage from "./pages/RentalDescriptionPage";
import NotFoundPage from "./pages/NotFoundPage";

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
