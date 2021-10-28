5;
import { Component, useContext } from "react";
import { Redirect, Route, useRouteMatch } from "react-router-dom";
import { AuthContext } from "../../../../state";

export default function StepRoute({ component: Component, ...rest }: any) {
  const {  }: any = useContext(AuthContext);
  const { path, url } = useRouteMatch();



  return (
    <Route
      {...rest}
      render={(props) =>
        false ? (
          <Component {...rest} {...props} />
        ) : (
          <Redirect to={`${url}/step-two`} />
        )
      }
    />
  );
}
