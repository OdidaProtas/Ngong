import { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { BizSetupRoute } from ".";
import { LandingPageComponent } from "../components";
import {
  BusinessDetailsScreen,
  BusinessFormScreen,
  BusinessListScreen,
  NotFoundScreen,
} from "../screens";
import {
  ChurnRateInsights,
  CustomerInsights,
  OverviewScreen,
  RevenueInsights,
  SalesInsightsScreen,
} from "../screens/InsightsScreens";

export default function DashboardNavigation() {
  return (
    <Router>
      <Switch>
        <BizSetupRoute component={LandingPageComponent} exact path="/" />
        <Route exact path={"/new-business"}>
          <BusinessFormScreen />
        </Route>
        <Route exact path={"/business/:id"}>
          <BusinessDetailsScreen />
        </Route>
        <Route exact path={"/overview"}>
          <OverviewScreen />
        </Route>
        <Route exact path={"/my-businesses"}>
          <BusinessListScreen />
        </Route>
        /
        <Route exact path={"/sales-insights"}>
          <SalesInsightsScreen />
        </Route>
        <Route exact path={"/customer-insights"}>
          <CustomerInsights />
        </Route>
        <Route exact path={"/churn-rate-insights"}>
          <ChurnRateInsights />
        </Route>
        <Route exact path={"/revenue-insights"}>
          <RevenueInsights />
        </Route>
        <Route path="**">
          <Suspense fallback={<div></div>}>
            <NotFoundScreen />
          </Suspense>
        </Route>
        {/* <Route exact path={"/insights"}>
          <InsightsNavigation />
        </Route> */}
      </Switch>
    </Router>
  );
}
