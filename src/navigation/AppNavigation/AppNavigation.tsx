
import { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ProtectedRoute } from "..";
import navigationOptions from "./AppNavigationSchema";

export default function BusinessNavigation() {
  return (
    <Router>
      <Switch>
        {navigationOptions.map((nav: any, idx: number) => {
          const { component, isExact, path, isProtected } = nav;
          if (isProtected)
            return (
              <ProtectedRoute
                key={idx}
                component={component}
                exact={isExact}
                path={path}
              />
            );
          return (
            <Route
              key={idx}
              component={component}
              exact={isExact}
              path={path}
            />
          );
        })}
      </Switch>
    </Router>
  );
}
