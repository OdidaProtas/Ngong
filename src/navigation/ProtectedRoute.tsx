5;
import { Component, Suspense, useContext, useEffect } from "react";
import { Redirect, Route } from "react-router-dom";
import Loader from "../components/SharedComponents/Loader/Loader";
import { AuthContext } from "../state";

export default function ProtectedRoute({ component: Component, ...rest }: any) {
  const { authState }: any = useContext(AuthContext);
  const { loaded, isLoggedIn } = authState;

  if (!loaded) return <Loader />;

  return (
    <Route
      {...rest}
      render={(props) =>
        isLoggedIn ? (
          <Suspense fallback={<Loader />}>
            <Component {...rest} {...props} />
          </Suspense>
        ) : (
          <Redirect to="/signin" />
        )
      }
    />
  );
}
