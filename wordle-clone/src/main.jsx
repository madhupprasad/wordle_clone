import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import OpeningPage from "./pages/opening-page";
import WordGiver1 from "./pages/word-giver-1";
import WordGiver2 from "./pages/word-giver-2";
import WordGiver3 from "./pages/word-giver-3";
import WordGiver4 from "./pages/word-giver-4";
import store from "./store";

const router = createBrowserRouter([
  {
    path: "/",
    element: <OpeningPage />,
  },
  {
    path: "/word-giver-1",
    element: <WordGiver1 />,
  },
  {
    path: "/word-giver-2",
    element: <WordGiver2 />,
  },
  {
    path: "/word-giver-3",
    element: <WordGiver3 />,
  },
  {
    path: "/word-giver-4",
    element: <WordGiver4 />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
