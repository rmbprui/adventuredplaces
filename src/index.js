import React from "react";
import ReactDOM from "react-dom";
import "@fortawesome/fontawesome-free/js/all.min.js";
import TagManager from "react-gtm-module";

// App
import App from "./App";

// JavaScript
import "@fortawesome/fontawesome-free/js/all.min.js";
import "bootstrap/dist/js/bootstrap";

// SCSS
import "./scss/app.scss";

const tagManagerArgs = {
  gtmId: "GTM-PZRP9RV",
};

TagManager.initialize(tagManagerArgs);

ReactDOM.render(<App />, document.getElementById("root"));
