import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "../pages/home";
import Residencial from "../pages/residencial";
import Corporativo from "../pages/corporativo";
import Contato from "../pages/contato";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/residencial",
    element: <Residencial />,
  },
  {
    path: "/corporativo",
    element: <Corporativo />,
  },
  {
    path: "/contato",
    element: <Contato />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
