import {
    AffiliateScreen,
    DashboardScreen,
    HomeScreen,
    NotFoundScreen,
    SignInScreen,
    SignUpScreen,
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
      isExact: true,
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
      path: "/dashboard",
      isExact: true,
      component: DashboardScreen,
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
  