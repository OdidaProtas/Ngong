5;
import { Component, Suspense, useContext } from "react";
import { Redirect, Route, useParams, useRouteMatch } from "react-router-dom";
import useMyCustomers from "../../../hooks/stores/useMyCustomers";
import useMyOrders from "../../../hooks/stores/useMyOrders";
import StateContext from "../../../state/appstate/StateContext";
import TablesSkeleton from "../../SharedComponents/TablesSkeleton/TablesSkeleton";

export default function OrdersRoute({ component: Component, ...rest }: any) {
  const { path, url } = useRouteMatch();

  const { id }: any = useParams();

  useMyOrders();

  const { orders }: any = useContext(StateContext);

  const o = orders?.length > 0;

  if (orders === null) return <TablesSkeleton />;

  return (
    <Route
      {...rest}
      render={(props) =>
        false ? (
          <Suspense fallback={<TablesSkeleton />}>
            <Component {...rest} {...props} />
          </Suspense>
        ) : (
          <Redirect to={`/admin/${id}/orders/empty`} />
        )
      }
    />
  );
}
