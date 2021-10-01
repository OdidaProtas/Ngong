import { Component, useEffect } from "react";
import { Redirect, Route } from "react-router-dom";
import { useAxiosRequest } from "../hooks";
import { AuthContext } from "../state";

export default function BizSetupRoute({ component: Component, ...rest }: any) {
  const { processRequest, data } = useAxiosRequest();

  const requestOptions: any = {
    method: "get",
    context: "businesses",
    isAuthenticated: true,
    endpoint: "/businesses",
  };

  const errorHandler = () => {
    alert("error");
  };
  const successHandler = () => {
    alert("success");
  };

  useEffect(() => {
    processRequest({ ...requestOptions, errorHandler, successHandler });
  }, []);
  useEffect(() => {
    console.log(data);
  }, [data]);
  return (
    <Route
      {...rest}
      render={(props) =>
        true ? <Component {...rest} {...props} /> : <Redirect to="/login" />
      }
    />
  );
}
