5;
import { Component, Suspense, useContext, useEffect } from "react";
import { Redirect, Route, useParams } from "react-router-dom";
import useMyProducts from "../../../../hooks/stores/useMyProducts";
import { StateContext } from "../../../../state/appstate";
import TablesSkeleton from "../../../SharedComponents/TablesSkeleton/TablesSkeleton";

export default function InventoryRoute({ component: Component, ...rest }: any) {
  const { myProducts }: any = useContext(StateContext);

  const products = myProducts?.filter((p) => p.trackQuantity);

  const notEmpty = products?.length > 0;

  useMyProducts();

  if (!myProducts) return <TablesSkeleton />;

  const { id }: any = useParams();

  return (
    <Route
      {...rest}
      render={(props) =>
        notEmpty ? (
          <Suspense fallback={<div />}>
            <Component {...rest} {...props} />
          </Suspense>
        ) : (
          <Redirect to={`/admin/${id}/products/inventory/empty`} />
        )
      }
    />
  );
}
