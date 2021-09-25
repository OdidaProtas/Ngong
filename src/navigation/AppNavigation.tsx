import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { RegistrationScreen, LoginScreen, HomeScreen } from "../screens";
import NotFoundScreen from "../screens/NotFoundScreen/NotFoundScreen";

export default function AppNavigation() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomeScreen />
        </Route>
        <Route exact path="/registration">
          <RegistrationScreen />
        </Route>
        <Route exact path="/login">
          <LoginScreen />
        </Route>
        <Route path="**">
          <NotFoundScreen />
        </Route>
      </Switch>
    </Router>
  );
}
