5;
import { Component, useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { StateContext } from "../../state/appstate";
import { useRouteMatch } from "react-router";
import { AuthContext } from "../../state";

export default function DashProtectedRoute({
  component: Component,
  ...rest
}: any) {
  const { getAppState }: any = useContext(StateContext);
  const { profileLoading } = useContext(AuthContext) as any;
  const { hasStore, stores } = getAppState();
  const { path, url } = useRouteMatch();
  if (stores === null) return <div>Loading...</div>;
  return (
    <Route
      {...rest}
      render={(props) =>
        hasStore ? (
          <Component {...rest} {...props} />
        ) : (
          <Redirect to={`${path}/setup`} />
        )
      }
    />
  );
}
