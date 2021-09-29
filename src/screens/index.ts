import { lazy } from "react";
const NotFoundScreen = lazy(() => import("./NotFoundScreen/NotFoundScreen"));
const LoginScreen = lazy(() => import("./LoginScreen/LoginScreen"));
const RegistrationScreen = lazy(
  () => import("./RegistrationScreen/RegistrationScreen")
);
const HomeScreen = lazy(() => import("./HomeScreen/HomeScreen"));
export { RegistrationScreen, LoginScreen, HomeScreen, NotFoundScreen };
