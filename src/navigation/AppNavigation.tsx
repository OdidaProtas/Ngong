import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { RegistrationScreen, LoginScreen } from "../screens";
import NotFoundScreen from "../screens/NotFoundScreen/NotFoundScreen";

export default function AppNavigation() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <RegistrationScreen />
        </Route>
        <Route exact path="/login">
          <LoginScreen />
        </Route>
        <Route path="**">
          <NotFoundScreen/>
        </Route>
      </Switch>
    </Router>
  );
}
