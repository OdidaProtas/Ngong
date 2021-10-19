5;
import { Component, useContext } from "react";
import { Redirect, Route, useRouteMatch } from "react-router-dom";
import { AuthContext } from "../../../../state";

export default function StepRoute({ component: Component, ...rest }: any) {
  const { profile, profileLoading }: any = useContext(AuthContext);
  const { path, url } = useRouteMatch();

  console.log(profile)

  if (profile === null) return <div>Loading...</div>;

  return (
    <Route
      {...rest}
      render={(props) =>
        !profile.hasProfile ? (
          <Component {...rest} {...props} />
        ) : (
          <Redirect to={`${path}/step-two`} />
        )
      }
    />
  );
}
