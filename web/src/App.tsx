import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

import Home from "./pages/Home.tsx";
import Detalhes from "./pages/Detalhes.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/aluno/:id",
    element: <Detalhes />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
