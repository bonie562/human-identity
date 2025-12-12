import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css"; // ← This line is critical!
import { BrowserRouter } from "react-router-dom";
import ScrollToHash from "./component/ScrollToHash";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToHash />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
