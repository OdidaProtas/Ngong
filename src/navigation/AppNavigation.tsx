import { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  RegistrationScreen,
  LoginScreen,
  HomeScreen,
  NotFoundScreen,
} from "../screens";
import ProtectedRoute from "./ProtectedRoute";


export default function AppNavigation() {
  return (
    <Router>
      <Switch>
        <ProtectedRoute exact path="/*" component={HomeScreen} />
        <Route exact path="/signup">
          <Suspense fallback={<div>Loading...</div>}>
            <RegistrationScreen />
          </Suspense>
        </Route>
        <Route exact path="/login">
          <Suspense fallback={<div>Loading...</div>}>
            <LoginScreen />
          </Suspense>
        </Route>
        <Route path="**">
          <Suspense fallback={<div>Loading...</div>}>
            <NotFoundScreen />
          </Suspense>
        </Route>
      </Switch>
    </Router>
  );
}
