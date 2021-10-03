import { lazy } from "react";
const NotFoundScreen = lazy(() => import("./NotFoundScreen/NotFoundScreen"));
const LoginScreen = lazy(() => import("./LoginScreen/LoginScreen"));
const RegistrationScreen = lazy(
  () => import("./RegistrationScreen/RegistrationScreen")
);
const HomeScreen = lazy(() => import("./HomeScreen/HomeScreen"));
import BusinessFormScreen from "./BusinessFormScreen/BusinessFormScreen";
import BusinessDetailsScreen from "./BusinessDetailsScreen/BusinessDetailsScreen";
import BusinessListScreen from "./BusinessListScreen/BusinessListScreen";
export {
  RegistrationScreen,
  LoginScreen,
  HomeScreen,
  NotFoundScreen,
  BusinessFormScreen,
  BusinessDetailsScreen,
  BusinessListScreen
};
