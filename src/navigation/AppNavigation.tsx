import { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { RegistrationScreen, LoginScreen, HomeScreen } from "../screens";
import NotFoundScreen from "../screens/NotFoundScreen/NotFoundScreen";

export default function AppNavigation() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Suspense fallback={<div></div>}>
            <HomeScreen />
          </Suspense>
        </Route>
        <Route exact path="/registration">
          <Suspense fallback={<div></div>}>
            <RegistrationScreen />
          </Suspense>
        </Route>
        <Route exact path="/login">
          <Suspense fallback={<div></div>}>
            <LoginScreen />
          </Suspense>
        </Route>
        <Route path="**">
          <NotFoundScreen />
        </Route>
      </Switch>
    </Router>
  );
}
