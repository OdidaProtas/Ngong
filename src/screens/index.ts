import { lazy } from "react";
const LoginScreen = lazy(() => import("./LoginScreen/LoginScreen"));
const RegistrationScreen = lazy(
  () => import("./RegistrationScreen/RegistrationScreen")
);
const HomeScreen = lazy(() => import("./HomeScreen/HomeScreen"));
export { RegistrationScreen, LoginScreen, HomeScreen };
