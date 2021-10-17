5;
import { Component, useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { StateContext } from "../../state/appstate";

export default function ProtectedRoute({ component: Component, ...rest }: any) {
  const { getAppState }: any = useContext(StateContext);
  const { businesses } = getAppState();
  console.log('====================================');
  console.log(businesses);
  console.log('====================================');
  return (
    <Route
      {...rest}
      render={(props) =>
        true ? <Component {...rest} {...props} /> : <Redirect to="/signin" />
      }
    />
  );
}
