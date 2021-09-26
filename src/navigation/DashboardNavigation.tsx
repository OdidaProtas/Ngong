import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { LandingPageComponent, OverviewComponent } from "../components";

export default function DashboardNavigation() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
            <LandingPageComponent/>
        </Route>
      </Switch>
    </Router>
  );
}
