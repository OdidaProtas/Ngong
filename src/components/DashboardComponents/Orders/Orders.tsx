import React from "react";
import { useRouteMatch } from "react-router";
import OrdersTabs from "./OrdersTabs";

import { Switch, Route } from "react-router";
import OrderDraftForm from "./Form/OrderDraftForm";

export default function Orders() {
  const { path } = useRouteMatch();

  return (
    <div>
      <Switch>
        <Route exact path={path}>
          <OrdersTabs />
        </Route>
        <Route exact path={`${path}/new`}>
          <OrderDraftForm />
        </Route>
      </Switch>
    </div>
  );
}
