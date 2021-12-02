import React, { useContext, useEffect } from "react";
import { useParams } from "react-router";
import { axiosInstance } from "../../state";
import { StateContext } from "../../state/appstate";

export default function useMyOrders() {
  const { id }: any = useParams();
  const { orders, supplierLoading, stateDispatch }: any =
    useContext(StateContext);
  useEffect(() => {
    if (orders === null) {
      axiosInstance
        .get(`/orders/${id}`)
        .then((res) => {
          stateDispatch({
            type: "ADD_ORDERS",
            payload: res.data,
          });
        })
        .catch((e) =>
          stateDispatch({
            type: "ADD_ORDERS",
            payload: [],
          })
        );
    }
  });
}
