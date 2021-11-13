import React from "react";
import { useRouteMatch } from "react-router";
import OrdersTabs from "./OrdersTabs";

import { Switch, Route } from "react-router";
import OrderDraftForm from "./Form/OrderDraftForm";
import EmptyOrders from "./EmptyOrders";
import AbandonedCheckouts from "./Tabs/AbandonedCheckouts";

export default function Orders() {
  const { path } = useRouteMatch();

  return (
    <div>
      <Switch>
        <Route exact path={path}>
          <EmptyOrders />
        </Route>
        <Route exact path={`${path}/new`}>
          <OrderDraftForm />
        </Route>
        <Route exact path={`${path}/abandoned`}>
          <AbandonedCheckouts />
        </Route>
      </Switch>
    </div>
  );
}
