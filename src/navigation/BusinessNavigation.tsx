import { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { BusinessListScreen, NotFoundScreen } from "../screens";

export default function BusinessNavigation() {
  return (
    <Router>
      <Switch>
        <Route exact path={"/all"}>
          <BusinessListScreen />
        </Route>
      </Switch>
    </Router>
  );
}
