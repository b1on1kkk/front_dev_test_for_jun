import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.tsx";
import "./index.css";

import Data from "./components/Data/Data.tsx";
import SingleEntity from "./components/SingleEntity/SingleEntity.tsx";
import CanvasComponent from "./components/CanvasComponent/CanvasComponent.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Data />
      },
      {
        path: ":id",
        element: <SingleEntity />
      },
      {
        path: "/all_dataset_visualisation",
        element: <CanvasComponent />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
