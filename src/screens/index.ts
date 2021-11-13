import { lazy } from "react";

import SignUpScreen from "./SignUpScreen/SignUpScreen";
import DashboardScreen from "./DashboardScreen'/DashboardScreen";
import NotFoundScreen from "./NotFoundScreen/NotFoundScreen";
import AffiliateScreen from "./AffiliateScreen/AffiliateScreen";
import MarketScreen from "./MarketScreen/MarketScreen";
import ShopScreen from "./ShopScreen/ShopScreen";
import StoreSelectionScreen from "./StoreSelectionScreen/StoreSelectionScreen";

const HomeScreen = lazy(() => import("./HomeScreen/HomeScreen"));
const SignInScreen = lazy(() => import("./SignInScreen/SignInScreen"));

const ProductScreen = lazy(() => import("./ProductScreen/ProductScreen"));
const StoreScreen = lazy(() => import("./StoreScreen/StoreScreen"));

export {
  HomeScreen,
  SignInScreen,
  SignUpScreen,
  DashboardScreen,
  NotFoundScreen,
  AffiliateScreen,
  MarketScreen,
  ShopScreen,
  StoreSelectionScreen,
  ProductScreen,
  StoreScreen,
};
