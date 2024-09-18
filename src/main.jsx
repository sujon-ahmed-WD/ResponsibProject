import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
 import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./MainLayot/Root.jsx";
import Home from "./Pagaes/Home.jsx";
import AddTorist from "./Pagaes/AddTorist.jsx";
import AllTorist from "./Pagaes/AllTorist.jsx";
import Ragister from "./Pagaes/Ragister.jsx";
import Login from "./Pagaes/Login.jsx";
 
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/addtourist",
        element: <AddTorist />,
      },
      {
        path: "/alltourist",
        element: <AllTorist />,
      },
      {
        path: "/ragister",
        element: <Ragister />,
      },
      {
        path: "/login",
        element:<Login/>
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
