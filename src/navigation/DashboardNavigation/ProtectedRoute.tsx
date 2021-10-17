5;
import { Component, useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { StateContext } from "../../state/appstate";
import { useRouteMatch } from "react-router";

export default function ProtectedRoute({ component: Component, ...rest }: any) {
  const { getAppState }: any = useContext(StateContext);
  const { businesses } = getAppState();
  const { path, url } = useRouteMatch();
  const hasBusinesses = businesses.length > 0;
  console.log(businesses);
  return (
    <Route
      {...rest}
      render={(props) =>
        false ? (
          <Component {...rest} {...props} />
        ) : (
          <Redirect to={`${path}/setup`} />
        )
      }
    />
  );
}
