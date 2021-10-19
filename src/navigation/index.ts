import { lazy } from "react";
import BusinessNavigation from "./BusinessNavigation";
import ProtectedRoute from "./ProtectedRoute";

import AppNavigation from "./AppNavigation/AppNavigation";
const DashboardNavigation = lazy(
  () => import("./DashboardNavigation/DashboardNavigation")
);
import BusinessForm from "../components/DashboardComponents/BusinessForm/BusinessForm";
export {
  BusinessForm,
  AppNavigation,
  BusinessNavigation,
  ProtectedRoute,
  DashboardNavigation,
};
