import React from "react";
import ReactDOM from "react-dom/client";
import "modern-normalize";
// import App from "./components/App/App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import AppWithRoute from "./components/AppWithRoute.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppWithRoute />
    </BrowserRouter>
  </React.StrictMode>
);
