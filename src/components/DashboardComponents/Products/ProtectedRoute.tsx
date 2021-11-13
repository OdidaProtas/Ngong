5;
import { Component, useContext } from "react";
import { Redirect, Route, useRouteMatch } from "react-router-dom";
import { AuthContext } from "../../../state";
import { StateContext } from "../../../state/appstate";
import TablesSkeleton from "../../SharedComponents/TablesSkeleton/TablesSkeleton";

export default function ProductRoute({ component: Component, ...rest }: any) {
  const { path, url } = useRouteMatch();
  

  const { myProducts, productLoading } = useContext(StateContext);


  if (productLoading || myProducts === null) return <TablesSkeleton />;



  return (  
    <Route
      {...rest}
      render={(props) =>
        myProducts.length ? (
          <Component {...rest} {...props} />
        ) : (
          <Redirect to={`${url}/empty`} />
        )
      }
    />
  );
}
