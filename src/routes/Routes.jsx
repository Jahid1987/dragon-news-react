import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";

import Home, { loader as newsLoader } from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Career from "../Pages/Career/Career";
import Login from "../Pages/Auth/Login";
import Register from "../Pages/Auth/Register";
import PrivateRoutes from "./PrivateRoutes";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        loader: newsLoader,
        element: <Home />,
        children: [
          {
            path: "/category/:id",
            element: <h3>This is category </h3>,
          },
        ],
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/about",
        element: (
          <PrivateRoutes>
            <About></About>
          </PrivateRoutes>
        ),
      },
      {
        path: "/career",
        element: (
          <PrivateRoutes>
            <Career></Career>
          </PrivateRoutes>
        ),
      },
    ],
  },
]);

export default routes;
