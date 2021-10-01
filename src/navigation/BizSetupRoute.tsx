import { Component, useEffect } from "react";
import { Redirect, Route } from "react-router-dom";
import { useAxiosRequest } from "../hooks";
import { AuthContext } from "../state";

export default function BizSetupRoute({ component: Component, ...rest }: any) {

  return (
    <Route
      {...rest}
      render={(props) =>
        true ? <Component {...rest} {...props} /> : <Redirect to="/login" />
      }
    />
  );
}
