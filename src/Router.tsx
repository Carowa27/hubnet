import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./pages_layout/Layout";
import { Error } from "./pages_layout/Error";
import { Home } from "./pages_layout/Home";
import { Shows } from "./pages_layout/Shows";
import { Producers } from "./pages_layout/Producers";
import { Community } from "./pages_layout/Community";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <Error></Error>,
    children: [
      { path: "/", element: <Home></Home>, index: true },
      { path: "/shows", element: <Shows></Shows> },
      { path: "/producers", element: <Producers></Producers> },
      { path: "/community", element: <Community></Community> },
    ],
  },
]);
