5;
import React, { Component, useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { StateContext } from "../../state/appstate";
import { useRouteMatch } from "react-router";
import { AuthContext } from "../../state";
import TablesSkeleton from "../../components/SharedComponents/TablesSkeleton/TablesSkeleton";

export default function DashProtectedRoute({
  component: Component,
  ...rest
}: any) {
  const { getAppState }: any = useContext(StateContext);
  const { profileLoading, user } = useContext(AuthContext) as any;
  const { hasStore, stores } = getAppState();
  const { path, url } = useRouteMatch();

  if (profileLoading) return <TablesSkeleton />;
  // if (!user) return <Redirect to={`/signin`} />;
  // if (stores === null) return <TablesSkeleton />;

  return (
    <Route
      {...rest}
      render={(props) =>
        true ? (
          <Component {...rest} {...props} />
        ) : (
          <Redirect to={`${path}/setup`} />
        )
      }
    />
  );
}
