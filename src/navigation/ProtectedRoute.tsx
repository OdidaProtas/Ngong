import { Component } from "react";
import { Route } from "react-router-dom";

export default function ProtectedRoute({ component: Component, ...rest }: any) {
  return (
    <Route {...rest} render={(props) => <Component {...rest} {...props} />} />
  );
}
