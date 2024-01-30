import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import {
  BrowserRouter,
  Router,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { configureStore } from "./store/index.js";
import { Provider } from "react-redux";
import { setAutorizationHeader } from "./api/client.js";

const accessToken = localStorage.getItem("accessToken");
if (accessToken) setAutorizationHeader(accessToken);

const router = createBrowserRouter([{ path: "*", element: <App /> }]);
const store = configureStore({ auth: !!accessToken }, { router });

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>

    <ToastContainer position="top-center" className={"toast-message"} />
  </>
);
