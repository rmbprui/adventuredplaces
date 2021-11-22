import React from "react";
import ReactDOM from "react-dom";
import "@fortawesome/fontawesome-free/js/all.min.js";

// App
import App from "./App";

// SCSS
import "./scss/index.scss";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
