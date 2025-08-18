import React from "react";
import ReactDOM from "react-dom/client";
import { ApolloProvider } from "@apollo/client";
import { client } from "./lib/apollo";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import App from "./App";
import BrandsPage from "./pages/BrandsPage";
import ModelsPage from "./pages/ModelsPage";
import GuitarPage from "./pages/GuitarPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <BrandsPage /> },
      { path: "brands/:brandId", element: <ModelsPage /> },
      { path: "guitars/:guitarId", element: <GuitarPage /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <RouterProvider router={router} />
    </ApolloProvider>
  </React.StrictMode>
);
