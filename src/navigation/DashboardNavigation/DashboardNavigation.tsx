import { Suspense } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useRouteMatch,
} from "react-router-dom";
import { BusinessForm, ProtectedRoute } from "..";
import { OverviewComponent } from "../../components/DashboardComponents";
import { DateSalutationComponent } from "../../components/SharedComponents";
import navigationOptions from "./DashboardNavigationSchema";

export default function DashboardNavigation() {
  const { path, url } = useRouteMatch();

  return (
    <div>
      {/* <DateSalutationComponent /> */}
      <Switch>
        {navigationOptions.map((options: any, idx: number) => {
          const { url, component } = options;
          return (
            <ProtectedRoute
              key={idx}
              component={component}
              exact
              path={`${path}/${url}`}
            />
          );
        })}
        <Route path="**">
          <h4>Url not configured</h4>
        </Route>
      </Switch>
      {/* <BusinessForm /> */}
    </div>
  );
}
