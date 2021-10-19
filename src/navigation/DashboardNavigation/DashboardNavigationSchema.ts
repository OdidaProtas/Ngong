import {
  Affiliates,
  Customers,
  Discounts,
  Insights,
  Marketing,
  Orders,
  OverviewComponent,
  Products,
  Reports,
  Sales,
  Settings,
} from "../../components/DashboardComponents";
import { HomeLandingPage } from "../../components/HomeComponents";

const navigationOptions = [
  {
    name: "overview",
    isProtected: false,
    url: "",
    isExact: true,
    component: HomeLandingPage,
  },
  {
    name: "products",
    isProtected: false,
    url: "products",
    isExact: true,
    component: Products,
  },
  {
    name: "orders",
    isProtected: false,
    url: "orders",
    isExact: true,
    component: Orders,
  },
  {
    name: "customers",
    isProtected: false,
    url: "customers",
    isExact: true,
    component: Customers,
  },
  {
    name: "marketing",
    isProtected: false,
    url: "marketing",
    isExact: true,
    component: Marketing,
  },
  {
    name: "discounts",
    isProtected: false,
    url: "discounts",
    isExact: true,
    component: Discounts,
  },
  {
    name: "affiliates",
    isProtected: false,
    url: "affiliates",
    isExact: true,
    component: Affiliates,
  },
  {
    name: "overview",
    isProtected: false,
    url: "overview",
    isExact: true,
    component: OverviewComponent,
  },
  {
    name: "insights",
    isProtected: false,
    url: "insights",
    isExact: true,
    component: Insights,
  },
  {
    name: "reports",
    isProtected: false,
    url: "reports",
    isExact: true,
    component: Reports,
  },
  {
    name: "sales",
    isProtected: false,
    url: "sales-channels",
    isExact: true,
    component: Sales,
  },
  {
    name: "settings",
    isProtected: false,
    url: "settings",
    isExact: true,
    component: Settings,
  },
];

export default navigationOptions;
