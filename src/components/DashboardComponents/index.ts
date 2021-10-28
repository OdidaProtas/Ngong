import { lazy } from "react";

const DashboardDrawerAppBar = lazy(
  () => import("./DashboardDrawerAppBar/DashboardDrawerAppBar")
);
const OverviewComponent = lazy(
  () => import("./OverviewComponent/OverviewComponent")
);
const Products = lazy(() => import("./Products/Products"));
const Orders = lazy(() => import("./Orders/Orders"));
const Customers = lazy(() => import("./Customers/Customers"));
const Marketing = lazy(() => import("./Marketing/Marketing"));
const Discounts = lazy(() => import("./Discounts/Discounts"));
const Affiliates = lazy(() => import("./Affiliates/Affiliates"));
const Insights = lazy(() => import("./Insights/Insights"));
const Reports = lazy(() => import("./Reports/Reports"));
const Sales = lazy(() => import("./Sales/Sales"));
const Settings = lazy(() => import("./Settings/Settings"));
export {
  DashboardDrawerAppBar,
  OverviewComponent,
  Products,
  Orders,
  Customers,
  Marketing,
  Discounts,
  Affiliates,
  Insights,
  Reports,
  Sales,
  Settings,
};
