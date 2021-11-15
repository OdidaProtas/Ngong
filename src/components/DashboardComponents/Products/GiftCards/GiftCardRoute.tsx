5;
import { Component, Suspense, useContext } from "react";
import { Redirect, Route, useParams, useRouteMatch } from "react-router-dom";
import useMyCollections from "../../../../hooks/stores/useMyCollections";
import useMyGiftCards from "../../../../hooks/stores/useMyGiftCards";
import useMyTransfers from "../../../../hooks/stores/useMyTransfers";
import { AuthContext } from "../../../../state";
import { StateContext } from "../../../../state/appstate";
import TablesSkeleton from "../../../SharedComponents/TablesSkeleton/TablesSkeleton";

export default function GiftCardRoute({ component: Component, ...rest }: any) {
  const {}: any = useContext(AuthContext);
  const { path, url } = useRouteMatch();

  const { id }: any = useParams();

  useMyGiftCards();

  const { giftCards }: any = useContext(StateContext);

  const g = giftCards?.length > 0;

  if (giftCards === null) return <TablesSkeleton />;

  return (
    <Route
      {...rest}
      render={(props) =>
        g ? (
          <Suspense fallback={<TablesSkeleton />}>
            <Component {...rest} {...props} />
          </Suspense>
        ) : (
          <Redirect to={`/admin/${id}/products/gift-cards/empty`} />
        )
      }
    />
  );
}
