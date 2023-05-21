import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main.js";
import Home from "../Pages/Home/Home.js";
import Footer from "../Shared/Footer/Footer.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      { path: "/", element: <Home></Home> },
      {
        path: "/footer",
        element: <Footer></Footer>,
      },
    ],
  },
]);

export default router;
