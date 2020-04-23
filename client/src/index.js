import React from "react";
import ReactDOM from "react-dom";

import "assets/vendor/nucleo/css/nucleo.css";
import "assets/vendor/font-awesome/css/font-awesome.min.css";
import "assets/scss/argon-design-system-react.scss";
import "assets/css/jww.css";

import App from "components/App";

import Firebase, { FirebaseContext } from "./components/Firebase";


ReactDOM.render(
  <FirebaseContext.Provider value={new Firebase() }>
    <App />
  </FirebaseContext.Provider>,
  document.getElementById("root")
);
