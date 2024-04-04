import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";

import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Career from "../Pages/Career/Career";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home />,
        children: [
          {
            path: "/category/:id",
            element: <h3>This is category </h3>,
          },
        ],
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/career",
        element: <Career></Career>,
      },
    ],
  },
]);

export default routes;
