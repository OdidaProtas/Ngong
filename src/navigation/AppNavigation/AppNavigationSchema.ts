import {
  AffiliateScreen,
  DashboardScreen,
  HomeScreen,
  NotFoundScreen,
  SignInScreen,
  SignUpScreen,
  StoreSelectionScreen,
} from "../../screens";

const navigationOptions = [
  {
    name: "HomeScreen",
    isProtected: false,
    path: "/",
    isExact: true,
    component: HomeScreen,
  },
  {
    name: "SignUpScreen",
    isProtected: false,
    path: "/signup",
    isExact: true,
    component: SignUpScreen,
  },
  {
    name: "SignInScreen",
    isProtected: false,
    path: "/signin",
    isExact: false,
    component: SignInScreen,
  },
  {
    name: "AffiliateScreen",
    isProtected: false,
    path: "/affiliate",
    isExact: true,
    component: AffiliateScreen,
  },
  {
    name: "DashboardScreen",
    isProtected: true,
    path: "/admin/:id",
    isExact: false,
    component: DashboardScreen,
  },
  {
    name: "Account",
    isProtected: false,
    path: "/store-login/:id",
    isExact: false,
    component: StoreSelectionScreen,
  },
  {
    name: "NotFoundScreen",
    isProtected: false,
    path: "**",
    isExact: false,
    component: NotFoundScreen,
  },
];

export default navigationOptions;
