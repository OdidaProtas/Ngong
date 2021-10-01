import { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { BizSetupRoute } from ".";
import { LandingPageComponent } from "../components";
import { BusinessFormScreen } from "../screens";

export default function DashboardNavigation() {
  return (
    <Router>
      <Switch>
        <BizSetupRoute component={LandingPageComponent} exact path="/" />
        <Route exact path={"/new-business"}>
          <BusinessFormScreen />
        </Route>
      </Switch>
    </Router>
  );
}
