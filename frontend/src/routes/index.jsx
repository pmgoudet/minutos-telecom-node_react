import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "../pages/home/Index";
import Residencial from "../pages/residencial";
import Corporativo from "../pages/corporativo";
import Contato from "../pages/contato";
import AreaDoCliente from "../pages/area-do-cliente";
import Contratos from "../pages/contratos";
import SoftPhone from "../pages/softphone";

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
  {
    path: "/area-do-cliente",
    element: <AreaDoCliente />,
  },
  {
    path: "/contratos",
    element: <Contratos />,
  },
  {
    path: "/softphone",
    element: <SoftPhone />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
