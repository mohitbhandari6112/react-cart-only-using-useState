// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <>
    {/* <StrictMode> */}
    <ToastContainer />
    <App />
    {/* </StrictMode> */}
  </>
);
