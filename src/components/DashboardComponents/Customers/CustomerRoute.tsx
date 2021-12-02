5;
import { Component, Suspense, useContext } from "react";
import { Redirect, Route, useParams, useRouteMatch } from "react-router-dom";
import useMyCustomers from "../../../hooks/stores/useMyCustomers";
import StateContext from "../../../state/appstate/StateContext";
import TablesSkeleton from "../../SharedComponents/TablesSkeleton/TablesSkeleton";

export default function CustomerRoute({
  component: Component,
  ...rest
}: any) {
  const { path, url } = useRouteMatch();

  const { id }: any = useParams();

  useMyCustomers();

  const { customers }: any = useContext(StateContext);

  const hasC = customers?.length > 0;

  if (customers === null) return <TablesSkeleton />;

  return (
    <Route
      {...rest}
      render={(props) =>
        hasC ? (
          <Suspense fallback={<TablesSkeleton />}>
            <Component {...rest} {...props} />
          </Suspense>
        ) : (
          <Redirect to={`/admin/${id}/customers/empty`} />
        )
      }
    />
  );
}
