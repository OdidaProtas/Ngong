import { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ProtectedRoute } from "..";
import Loader from "../../components/SharedComponents/Loader/Loader";
import navigationOptions from "./AppNavigationSchema";

export default function BusinessNavigation() {
  if (window.location.host.split(".")[0] == "shop")
    return (
      <div>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus,
        fugit sint eum minus molestiae corrupti nihil nisi ex quod minima saepe
        omnis maiores, nesciunt soluta inventore ducimus iusto voluptate
      </div>
    );
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
