import { useContext, useEffect } from "react";
import { Redirect, Route, useHistory, useRouteMatch } from "react-router-dom";
import TablesSkeleton from "../../components/SharedComponents/TablesSkeleton/TablesSkeleton";
import { AuthContext } from "../../state";
import { StateContext } from "../../state/appstate";

export default function StoreRoute({
  component: Component,
  loading,
  ...rest
}: any) {
  const { authState }: any = useContext(AuthContext);
  const { loaded } = authState;

  if (!loaded || loading)
    return (
      <div style={{ width: "100%" }}>
        <TablesSkeleton />
      </div>
    );

  const { myStores } = useContext(StateContext);

  const hasStores = myStores && myStores.length > 0;
  const { url } = useRouteMatch();

  const history = useHistory();

  useEffect(() => {
    if (hasStores) {
      // history.push("/admin");
    }
  }, [myStores]);

  return (
    <Route
      {...rest}
      render={(props) =>
        !hasStores ? (
          <Component {...rest} {...props} />
        ) : (
          <Redirect to={`${url}/list`} />
        )
      }
    />
  );
}
