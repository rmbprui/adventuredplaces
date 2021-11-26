import React from "react";
import ReactDOM from "react-dom";
import "@fortawesome/fontawesome-free/js/all.min.js";

// App
import App from "./App";

// JavaScript
import "@fortawesome/fontawesome-free/js/all.min.js";
import "bootstrap/dist/js/bootstrap";

// SCSS
import "./scss/app.scss";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
