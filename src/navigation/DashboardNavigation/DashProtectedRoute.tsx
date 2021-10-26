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
  const { profileLoading, user } = useContext(AuthContext) as any;
  const { path, url } = useRouteMatch();

  if (profileLoading) return <TablesSkeleton />;

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
