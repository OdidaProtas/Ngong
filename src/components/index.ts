import { lazy } from "react";
const NavbarComponent = lazy(() => import("./NavbarComponent/NavbarComponent"));
const DrawerComponent = lazy(() => import("./DrawerComponent/DrawerComponent"));
const LogoComponent = lazy(() => import("./LogoComponent/LogoComponent"));
const MultiStepForm = lazy(
  () => import("../components/BusinessFormSteps/MultistepFormComponent")
);
const StyledBackground = lazy(
  () => import("./StyledBackgroundComponent/StyledBackground")
);
const OnboardingComponent = lazy(
  () => import("./OnboardingComponent/OnboardingComponent")
);
const SignInWithGoogleComponent = lazy(
  () => import("./SignInWithGoogleComponent/SignInWithGoogleComponent")
);
const AuthenticationFormComponent = lazy(
  () => import("./AuthenticationFormComponent/AuthenticationFormComponent")
);

const DrawerItemComponent = lazy(
  () => import("./DrawerItemComponent/DrawerItemComponent")
);
const LandingPageComponent = lazy(
  () => import("./LandingPageComponent/LandingPageComponent")
);
const CallToActionComponent = lazy(
  () => import("./CallToActionComponents/CallToActionComponent")
);
const WelcomeComponent = lazy(
  () => import("./WelcomeComponent/WelcomeCompent")
);
const DateComponent = lazy(() => import("./DateComponent/DateComponent"));
const OverviewComponent = lazy(
  () => import("./OverviewComponent/OverviewComponent")
);
const OverviewSummaryComponent = lazy(
  () => import("./OverviewSummaryComponent/OverviewSummaryComponent")
);
const ChartsComponent = lazy(() => import("./ChartsComponent/ChartsComponent"));
const CardComponent = lazy(() => import("./CardComponent/CardComponent"));
const CustomerLocationComponent = lazy(
  () => import("./CustomerLocationComponent/CustomerLocationComponent")
);
const OtpVerificationForm = lazy(
  () => import("./AuthModalForm/OtpVerificationForm")
);
const SnackBarComponent = lazy(
  () => import("./SnackBarComponent/SnackBarComponent")
);
const LoadingBtnComponent = lazy(
  () => import("./LoadingBtnComponent/LoadingBtnComponent")
);
export {
  OnboardingComponent,
  StyledBackground,
  LogoComponent,
  AuthenticationFormComponent,
  SignInWithGoogleComponent,
  NavbarComponent,
  DrawerComponent,
  DrawerItemComponent,
  LandingPageComponent,
  WelcomeComponent,
  CallToActionComponent,
  DateComponent,
  OverviewComponent,
  OverviewSummaryComponent,
  ChartsComponent,
  CardComponent,
  CustomerLocationComponent,
  OtpVerificationForm,
  SnackBarComponent,
  LoadingBtnComponent,
  MultiStepForm,
};
