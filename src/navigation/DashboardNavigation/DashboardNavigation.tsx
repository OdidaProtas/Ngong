import { Suspense } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { ProtectedRoute } from "..";
import { OverviewComponent } from "../../components/DashboardComponents";
import { DateSalutationComponent } from "../../components/SharedComponents";
import navigationOptions from "./DashboardNavigationSchema";

export default function DashboardNavigation({ match }: any) {
  return (
    <div>
      <DateSalutationComponent />
      <Route exact path="/" component={OverviewComponent} />
    </div>
  );
}
