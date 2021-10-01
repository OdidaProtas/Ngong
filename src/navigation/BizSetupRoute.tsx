import { Component, useEffect, useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { useAxiosRequest } from "../hooks";
import { AuthContext } from "../state";
import { StateContext } from "../state/appstate";

export default function BizSetupRoute({ component: Component, ...rest }: any) {
  const { state }: any = useContext(StateContext);
  const { businesses } = state;
  const hasBussiness = businesses.length > 0;
  return (
    <Route
      {...rest}
      render={(props) =>
        hasBussiness ? (
          <Component {...rest} {...props} />
        ) : (
          <Redirect to="/new-business" />
        )
      }
    />
  );
}
