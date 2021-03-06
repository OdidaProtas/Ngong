import React, { lazy, Suspense, useContext } from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import useMyProducts from "../../../hooks/stores/useMyProducts";
import { StateContext } from "../../../state/appstate";
import TablesSkeleton from "../../SharedComponents/TablesSkeleton/TablesSkeleton";
import CollectionForm from "./Collections/CollectionForm";
import CollectionsList from "./Collections/CollectionsList";
import CollectionsRoute from "./Collections/CollectionsRoute";
import EmptyCollections from "./Collections/EmptyCollections";
import EmptyGiftCards from "./GiftCards/EmptyGiftCards";
import GiftCardForm from "./GiftCards/GiftCardForm";
import GiftCardRoute from "./GiftCards/GiftCardRoute";
import GiftCardTable from "./GiftCards/GiftCardTable";
import IssueGiftCards from "./GiftCards/IssueGiftCards";
import EmptyInventory from "./Inventory/EmptyInventory";
import InventoryRoute from "./Inventory/InventoryRoute";
import InventoryTable from "./Inventory/InventoryTable";
import InventoryTabs from "./Inventory/InventoryTabs";
import Inventoryform from "./Inventoryform";
import ProtectedRoute from "./ProtectedRoute";
import EmptyTransfers from "./Transfers/EmptyTransfers";
import TransferForm from "./Transfers/TransferForm";
import TransferRoute from "./Transfers/TransferRoute";
const EmptyProduct = lazy(() => import("./EmptyProduct"));
const ProductForm = lazy(() => import("./ProductForm"));
const ProductList = lazy(() => import("./ProductLists/ProductLists"));
const TransferList = lazy(() => import("./Transfers/TransferList"));

export default function Products() {
  const { path } = useRouteMatch();

  const { myProducts }: any = useContext(StateContext);
  useMyProducts();
  if (!myProducts) return <TablesSkeleton />;
  return (
    <div>
      <Switch>
        <ProtectedRoute component={ProductList} exact path={path} />
        <Route exact path={`${path}/new`}>
          <Suspense fallback={<TablesSkeleton />}>
            <ProductForm />
          </Suspense>
        </Route>
        <Route exact path={`${path}/empty`}>
          <Suspense fallback={<TablesSkeleton />}>
            <EmptyProduct />
          </Suspense>
        </Route>
        <InventoryRoute
          component={InventoryTabs}
          exact
          path={`${path}/inventory`}
        />
        <Route exact path={`${path}/inventory/empty`}>
          <Suspense fallback={<TablesSkeleton />}>
            <EmptyInventory />
          </Suspense>
        </Route>

        <TransferRoute
          component={TransferList}
          exact
          path={`${path}/transfers`}
        ></TransferRoute>

        <Route exact path={`${path}/transfers/empty`}>
          <Suspense fallback={<TablesSkeleton />}>
            <EmptyTransfers />
          </Suspense>
        </Route>

        <Route exact path={`${path}/transfers/new`}>
          <Suspense fallback={<TablesSkeleton />}>
            <TransferForm />
          </Suspense>
        </Route>
        <CollectionsRoute
          exact
          path={`${path}/collections`}
          component={CollectionsList}
        />
        <Route exact path={`${path}/collections/empty`}>
          <Suspense fallback={<TablesSkeleton />}>
            <EmptyCollections />
          </Suspense>
        </Route>
        <GiftCardRoute
          component={GiftCardTable}
          exact
          path={`${path}/gift-cards`}
        />
        <Route exact path={`${path}/gift-cards/empty`}>
          <Suspense fallback={<TablesSkeleton />}>
            <EmptyGiftCards />
          </Suspense>
        </Route>

        <Route exact path={`${path}/gift-cards/new`}>
          <Suspense fallback={<TablesSkeleton />}>
            <GiftCardForm />
          </Suspense>
        </Route>
        <Route exact path={`${path}/gift-cards/issue`}>
          <Suspense fallback={<TablesSkeleton />}>
            <IssueGiftCards />
          </Suspense>
        </Route>
        <Route exact path={`${path}/collections/new`}>
          <Suspense fallback={<TablesSkeleton />}>
            <CollectionForm />
          </Suspense>
        </Route>
        <Route exact path={`${path}/:productID`}>
          <Suspense fallback={<TablesSkeleton />}>
            <ProductForm />
          </Suspense>
        </Route>
        <Route path={"**"}>resource not found</Route>
      </Switch>
    </div>
  );
}
