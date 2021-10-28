5;
import React, { Component, Suspense, useContext, useEffect } from "react";
import { Redirect, Route } from "react-router-dom";
import { StateContext } from "../../state/appstate";
import { useRouteMatch } from "react-router";
import { AuthContext } from "../../state";
import TablesSkeleton from "../../components/SharedComponents/TablesSkeleton/TablesSkeleton";
import { useAxiosRequest } from "../../hooks";
import DashboardContext from "./state";

export default function DashProtectedRoute({
  component: Component,
  ...rest
}: any) {
  const { myStores, stateDispatch }: any = useContext(StateContext);
  const { url } = useRouteMatch();

  const state = useContext(DashboardContext);
  const {
    store: { profile },
  } = state;

  console.log(profile);

  return (
    <Route
      {...rest}
      render={(props) =>
        profile ? (
          <Suspense fallback={<TablesSkeleton />}>
            <Component {...rest} {...props} />
          </Suspense>
        ) : (
          <Redirect to={`${url}/setup`} />
        )
      }
    />
  );
}
