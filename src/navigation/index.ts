import { lazy } from "react";

const AppNavigation = lazy(() => import("./AppNavigation"));
const DashboardNavigation = lazy(() => import("./DashboardNavigation"));
import BizSetupRoute from "./BizSetupRoute";
import InsightNavigation from "./InsightNavigation";
import BusinessNavigation from "./BusinessNavigation";
export {
  AppNavigation,
  DashboardNavigation,
  BizSetupRoute,
  InsightNavigation,
  BusinessNavigation,
};
