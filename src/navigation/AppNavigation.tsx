import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { RegistrationScreen } from "../screens";

export default function AppNavigation() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <RegistrationScreen />
        </Route>
      </Switch>
    </Router>
  );
}
