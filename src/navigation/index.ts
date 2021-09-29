import { lazy } from "react";

const AppNavigation = lazy(() => import("./AppNavigation"));
const DashboardNavigation = lazy(() => import("./DashboardNavigation"));

export { AppNavigation, DashboardNavigation };
