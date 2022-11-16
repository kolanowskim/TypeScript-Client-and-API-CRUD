import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import StarsPage from "./pages/stars/StarsPage";
import StarDetailsPage, {
  starDetailsLoader,
} from "./pages/starDetails/StarDetailsPage";
import MainPage from "./pages/mainPage/MainPage";
import ConstellationsPage from "./pages/constellations/ConstellationsPage";
import ConDetailsPage, {
  constellationDetailsLoader,
} from "./pages/constellationDetails/ConDetailsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/stars",
    element: <StarsPage />,
  },
  {
    path: "/starDetails/:id",
    element: <StarDetailsPage />,
    loader: starDetailsLoader,
  },
  {
    path: "/constellations",
    element: <ConstellationsPage />,
  },
  {
    path: "/constellationDetails/:id",
    element: <ConDetailsPage />,
    loader: constellationDetailsLoader,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
