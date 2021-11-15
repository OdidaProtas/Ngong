5;
import { Component, Suspense, useContext } from "react";
import { Redirect, Route, useParams, useRouteMatch } from "react-router-dom";
import useMyCollections from "../../../../hooks/stores/useMyCollections";
import useMyTransfers from "../../../../hooks/stores/useMyTransfers";
import { AuthContext } from "../../../../state";
import { StateContext } from "../../../../state/appstate";
import TablesSkeleton from "../../../SharedComponents/TablesSkeleton/TablesSkeleton";

export default function CollectionsRoute({
  component: Component,
  ...rest
}: any) {
  const {}: any = useContext(AuthContext);
  const { path, url } = useRouteMatch();

  const { id }: any = useParams();

  useMyCollections();

  const { collections }: any = useContext(StateContext);

  const hasC = collections?.length > 0;

  if (collections === null) return <TablesSkeleton />;

  return (
    <Route
      {...rest}
      render={(props) =>
        hasC ? (
          <Suspense fallback={<TablesSkeleton />}>
            <Component {...rest} {...props} />
          </Suspense>
        ) : (
          <Redirect to={`/admin/${id}/products/collections/empty`} />
        )
      }
    />
  );
}
