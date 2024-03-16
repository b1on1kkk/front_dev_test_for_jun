import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store.ts";

import App from "./App.tsx";
import "./index.css";

import Data from "./components/Data/Data.tsx";
import SingleEntity from "./components/SingleEntity/SingleEntity.tsx";
import CanvasComponent from "./components/CanvasComponent/CanvasComponent.tsx";
import MatchedPoints from "./components/MatchedPoints/MatchedPoints.tsx";

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
      },
      {
        path: "/matched_points_visualisation",
        element: <MatchedPoints />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
