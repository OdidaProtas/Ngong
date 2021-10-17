import { Suspense } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { BusinessForm, ProtectedRoute } from "..";
import { OverviewComponent } from "../../components/DashboardComponents";
import { DateSalutationComponent } from "../../components/SharedComponents";
import navigationOptions from "./DashboardNavigationSchema";

export default function DashboardNavigation({ match }: any) {
  return (
    <div>
      <DateSalutationComponent />
      <BusinessForm/>
    </div>
  );
}
