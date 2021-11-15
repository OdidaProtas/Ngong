5;
import { Component, Suspense, useContext } from "react";
import { Redirect, Route, useParams, useRouteMatch } from "react-router-dom";
import useMyTransfers from "../../../../hooks/stores/useMyTransfers";
import { AuthContext } from "../../../../state";
import { StateContext } from "../../../../state/appstate";
import TablesSkeleton from "../../../SharedComponents/TablesSkeleton/TablesSkeleton";

export default function TransferRoute({ component: Component, ...rest }: any) {
  const {}: any = useContext(AuthContext);
  const { path, url } = useRouteMatch();

  const { id }: any = useParams();

  useMyTransfers();

  const { transfers }: any = useContext(StateContext);

  const hasTransfers = transfers?.length > 0;

  if (transfers === null) return <TablesSkeleton />;

  return (
    <Route
      {...rest}
      render={(props) =>
        hasTransfers ? (
          <Suspense fallback={<TablesSkeleton />}>
            <Component {...rest} {...props} />
          </Suspense>
        ) : (
          <Redirect to={`/admin/${id}/products/transfers/empty`} />
        )
      }
    />
  );
}
