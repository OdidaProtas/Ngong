import { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function BusinessNavigation() {
  return (
    <Router>
      <Switch>
        <Route exact path={"/all"}>
        </Route>
      </Switch>
    </Router>
  );
}
