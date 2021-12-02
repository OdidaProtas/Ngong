import React, { useContext, useEffect } from "react";
import { useParams } from "react-router";
import { axiosInstance } from "../../state";
import { StateContext } from "../../state/appstate";

export default function useMyCustomers() {
  const { customers, stateDispatch }: any = useContext(StateContext);
  const { id }: any = useParams();
  useEffect(() => {
    if (customers === null) {
      axiosInstance
        .get(`/customers/${id}`)
        .then((r) => {
          stateDispatch({
            type: "ADD_CUSTOMERS",
            payload: r.data,
          });
        })
        .catch((e) => {
          stateDispatch({
            type: "ADD_CUSTOMERS",
            payload: [],
          });
        });
    }
  }, []);
}
