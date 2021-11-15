import React, { useContext, useEffect } from "react";
import { useParams } from "react-router";
import { axiosInstance } from "../../state";
import { StateContext } from "../../state/appstate";

export default function useMySuppliers() {
  const { id }: any = useParams();
  const { suppliers, supplierLoading, stateDispatch }: any =
    useContext(StateContext);
  useEffect(() => {
    if (!suppliers && !supplierLoading) {
      stateDispatch({
        type: "SUPPLIERS_LOADING",
      });
      axiosInstance
        .get(`/suppliers/${id}`)
        .then((res) => {
          stateDispatch({
            type: "ADD_SUPPLIERS",
            payload: res.data,
          });
        })
        .catch((e) =>
          stateDispatch({
            type: "ADD_SUPPLIERS",
            payload: [],
          })
        );
    }
  });
}
