import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "../pages/public/home/Index";
import Residencial from "../pages/public/residencial";
import Corporativo from "../pages/public/corporativo";
import Contato from "../pages/public/contato";
import AreaDoCliente from "../pages/public/area-do-cliente";
import Contratos from "../pages/public/contratos";
import SoftPhone from "../pages/public/softphone";
import TelefoniaMovel from "../pages/public/telefonia-movel";

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
    path: "/telefonia-movel",
    element: <TelefoniaMovel />,
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
