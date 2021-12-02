import React from "react";
import { Route, Switch, useRouteMatch } from "react-router";
import CustomerForm from "./CustomerForm";
import CustomerRoute from "./CustomerRoute";
import CustomerTable from "./CustomerTable";
import CustomerTabs from "./CustomerTabs";
import EmptyCustomer from "./EmptyCustomer";

export default function Customers() {
  const { path } = useRouteMatch();
  return (
    <div>
      <Switch>
        <CustomerRoute exact path={path} component={CustomerTabs} />
        <Route exact path={`${path}/empty`}>
          <EmptyCustomer />
        </Route>
        <Route exact path={`${path}/new`}>
          <CustomerForm />
        </Route>
      </Switch>
    </div>
  );
}
