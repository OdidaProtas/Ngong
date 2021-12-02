import React from "react";
import { Switch, useRouteMatch } from "react-router";
import { Route } from "react-router-dom";
import DiscountForm from "./DiscountForm/DiscountForm";
import DiscountTabs from "./DiscountTabs";
import EmptyAutomaticDiscounts from "./EmptyAutomaticDiscounts";
import EmptyDiscounts from "./EmptyDiscounts";

export default function Discounts() {
  const { path } = useRouteMatch();
  return (
    <div>
      <Switch>
        <Route exact path={path}>
          <EmptyDiscounts />
        </Route>
        <Route exact path={`${path}/new`}>
          <DiscountForm />
        </Route>
        <Route exact path={`${path}/empty`}>
          <EmptyDiscounts />
        </Route>
        <Route exact path={`${path}/auto`}>
          <EmptyAutomaticDiscounts />
        </Route> 
        <Route exact path={`${path}/auto/new`}>
          <DiscountForm />
        </Route>  
      </Switch>
      {/* <EmptyDiscounts /> */}
    </div>
  );
}
