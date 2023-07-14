import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./Layout";
import { Error } from "./Error";
import { Home } from "./Home";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <Error></Error>,
    children: [{ path: "/", element: <Home></Home>, index: true },
{path:"/shows",element:<Shows></Shows>},
{path:"/producers",element:<Producers></Producers>},
{path:"/community",element:<Community></Community>}],
  },
]);
