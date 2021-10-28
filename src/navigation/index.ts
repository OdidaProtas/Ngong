import { lazy } from "react";
import ProtectedRoute from "./ProtectedRoute";

const AppNavigation = lazy(() => import("./AppNavigation/AppNavigation"));
const DashboardNavigation = lazy(
  () => import("./DashboardNavigation/DashboardNavigation")
);
const BusinessForm = lazy(
  () => import("../components/DashboardComponents/BusinessForm/BusinessForm")
);
export { BusinessForm, AppNavigation, ProtectedRoute, DashboardNavigation };
