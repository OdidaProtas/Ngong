import React from "react";
import { Route, Switch, useRouteMatch } from "react-router";
import CustomerForm from "./CustomerForm";
import EmptyCustomer from "./EmptyCustomer";

export default function Customers() {
  const { path } = useRouteMatch();
  return (
    <div>
      <Switch>
        <Route exact path={path}>
          <EmptyCustomer />
        </Route>
        <Route exact path={`${path}/new`}>
          <CustomerForm />
        </Route>
      </Switch>
    </div>
  );
}
