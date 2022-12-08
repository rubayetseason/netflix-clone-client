import { createBrowserRouter } from "react-router-dom";
import Gallery from "../components/Gallery";
import Home from "../components/Home";
import NotFound from "../components/shared/NotFound";
import Signin from "../components/Signin";
import Signup from "../components/Signup";
import Main from "../layouts/Main";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <NotFound></NotFound>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/signin",
        element: <Signin></Signin>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path: "/gallery",
        element: (
            <Gallery></Gallery>
        ),
      },
    ],
  },
  { path: "*", element: <NotFound></NotFound> },
]);

export default router;
