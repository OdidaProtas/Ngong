5;
import { Component, useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { AuthContext } from "../state";

export default function ProtectedRoute({ component: Component, ...rest }: any) {
  const { getAuthState }: any = useContext(AuthContext);
  const { isLoggedIn } = getAuthState();
  
  return (
    <Route
      {...rest}
      render={(props) =>
        true ? <Component {...rest} {...props} /> : <Redirect to="/signin" />
      }
    />
  );
}
