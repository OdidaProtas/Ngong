import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import EmptyProduct from "./EmptyProduct";
import ProductForm from "./ProductForm";

export default function Products() {
  const { path } = useRouteMatch();
  return (
    <div>
      <Switch>
        <Route exact path={path}>
          <EmptyProduct />
        </Route>
        <Route exact path={`${path}/new`}>
          <ProductForm />
        </Route>
      </Switch>
    </div>
  );
}
