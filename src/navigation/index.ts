import { lazy } from "react";

const AppNavigation = lazy(() => import("./AppNavigation"));
const DashboardNavigation = lazy(() => import("./DashboardNavigation"));
import BizSetupRoute from "./BizSetupRoute";

export { AppNavigation, DashboardNavigation, BizSetupRoute };
