import React from "react";
import { Switch, useRouteMatch } from "react-router";
import { Route } from "react-router-dom";
import DiscountForm from "./DiscountForm/DiscountForm";
import DiscountTabs from "./DiscountTabs";
import EmptyDiscounts from "./EmptyDiscounts";

export default function Discounts() {
  const { path } = useRouteMatch();
  return (
    <div>
      <Switch>
        <Route exact path={path}>
          <DiscountTabs />
        </Route>
        <Route exact path={`${path}/new`}>
          <DiscountForm />
        </Route>
        <Route exact path={`${path}/new/automatic`}>
          <DiscountForm />
        </Route>
      </Switch>
      {/* <EmptyDiscounts /> */}
    </div>
  );
}
