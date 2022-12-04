import { createBrowserRouter } from "react-router-dom";
import Gallery from "../components/Gallery";
import Home from "../components/Home";
import Profile from "../components/Profile";
import NotFound from "../components/shared/NotFound";
import Signin from "../components/Signin";
import Signup from "../components/Signup";
import Main from "../layouts/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
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
        path: "/profile",
        element: <Profile></Profile>,
      },
      {
        path: "/gallery",
        element: <Gallery></Gallery>,
      },
    ],
  },
  { path: "*", element: <NotFound></NotFound> },
]);

export default router;
