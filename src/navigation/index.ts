import { lazy } from "react";
import ProtectedRoute from "./ProtectedRoute";

import AppNavigation from "./AppNavigation/AppNavigation";
const DashboardNavigation = lazy(
  () => import("./DashboardNavigation/DashboardNavigation")
);
import BusinessForm from "../components/DashboardComponents/BusinessForm/BusinessForm";
export {
  BusinessForm,
  AppNavigation,
  ProtectedRoute,
  DashboardNavigation,
};
