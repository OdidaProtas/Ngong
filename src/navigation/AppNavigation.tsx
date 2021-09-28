import { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { RegistrationScreen, LoginScreen, HomeScreen } from "../screens";
import NotFoundScreen from "../screens/NotFoundScreen/NotFoundScreen";
import ProtectedRoute from "./ProtectedRoute";

const HomePage = (
  <Suspense fallback={<div></div>}>
    <HomeScreen />
  </Suspense>
);

export default function AppNavigation() {
  return (
    <Router>
      <Switch>
        <ProtectedRoute exact path="/" component={HomePage} />
        <Route exact path="/signup">
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
