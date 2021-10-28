import { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ProtectedRoute } from "..";
import Loader from "../../components/SharedComponents/Loader/Loader";
import navigationOptions from "./AppNavigationSchema";

export default function BusinessNavigation() {
  return (
    <Suspense
      fallback={
        <div>
          <Loader />
        </div>
      }
    >
      <Router>
        <Switch>
          {navigationOptions.map((nav: any, idx: number) => {
            const { component, isExact, path, isProtected } = nav;
            const Component: any = component;
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
                // component={component}
                exact={isExact}
                path={path}
              >
                <Component />
              </Route>
            );
          })}
        </Switch>
      </Router>
    </Suspense>
  );
}
