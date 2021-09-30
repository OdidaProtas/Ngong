import { Component, useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { AuthContext } from "../state";

export default function ProtectedRoute({ component: Component, ...rest }: any) {
  const {
    state: { isLoggedIn },
  }: any = useContext(AuthContext);
  return (
    <Route
      {...rest}
      render={(props) =>
        isLoggedIn ? (
          <Component {...rest} {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
}
