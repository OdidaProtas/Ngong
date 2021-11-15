import {
  AffiliateScreen,
  DashboardScreen,
  HomeScreen,
  NotFoundScreen,
  ProductScreen,
  SignInScreen,
  SignUpScreen,
  StoreScreen,
  StoreSelectionScreen,
} from "../../screens";
import Logout from "../../screens/LogoutScreen/Logout";

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
    name: "Account",
    isProtected: false,
    path: "/products-preview/:id",
    isExact: true,
    component: ProductScreen,
  },
  {
    name: "Account",
    isProtected: false,
    path: "/store-theme/:id",
    isExact: false,
    component: StoreScreen,
  },
  {
    name: "Logout",
    isProtected: false,
    path: "/logout",
    isExact: false,
    component: Logout,
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
