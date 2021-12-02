import React from "react";
import { useRouteMatch } from "react-router";
import OrdersTabs from "./OrdersTabs";

import { Switch, Route } from "react-router";
import OrderDraftForm from "./Form/OrderDraftForm";
import EmptyOrders from "./EmptyOrders";
import AbandonedCheckouts from "./Tabs/AbandonedCheckouts";
import OrdersRoute from "./OrdersRoute";
import OrdersList from "./OrdersList";
import Drafts from "./Drafts/Drafts";
import EmptyDrafts from "./Tabs/EmptyDrafts";
import DraftsRoute from "./Drafts/DraftsRoute";

export default function Orders() {
  const { path } = useRouteMatch();

  return (
    <div>
      <Switch>
        <OrdersRoute exact path={path} component={OrdersList} />
        <Route exact path={`${path}/empty`}>
          <EmptyOrders />
        </Route>
        <Route exact path={`${path}/drafts/new`}>
          <OrderDraftForm />
        </Route>
        <DraftsRoute component={Drafts} exact path={`${path}/drafts`} />
        <Route exact path={`${path}/drafts/empty`}>
          <EmptyDrafts />
        </Route>
        <Route exact path={`${path}/abandoned`}>
          <AbandonedCheckouts />
        </Route>
      </Switch>
    </div>
  );
}
