import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/vendor/nucleo/css/nucleo.css";
import "assets/vendor/font-awesome/css/font-awesome.min.css";
import "assets/scss/argon-design-system-react.scss";
import "assets/css/jww.css";

import Home from "views/Home.jsx";
import Search from "views/Search.jsx";
import Account from "views/Account.jsx";
import WillExample from "views/Will.jsx";


ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact render={props => <Home {...props} />} />
      <Route path="/search" exact render={props => <Search {...props} />} />
      <Route path="/account" exact render={props => <Account {...props} />} />
      <Route path="/will/1" exact render={props => <WillExample {...props} />} />
      <Redirect to="/" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
