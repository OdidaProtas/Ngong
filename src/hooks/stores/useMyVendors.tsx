import React, { useContext, useEffect } from "react";
import { useParams } from "react-router";
import { axiosInstance } from "../../state";
import { StateContext } from "../../state/appstate";

export default function useMyVendors() {
  const { collections, stateDispatch }: any = useContext(StateContext);
  const { id }: any = useParams();
  useEffect(() => {
    if (collections === null) {
      axiosInstance
        .get(`/vendors/${id}`)
        .then((r) => {
          stateDispatch({
            type: "ADD_VENDORS",
            payload: r.data,
          });
        })
        .catch((e) => {
          stateDispatch({
            type: "ADD_VENDORS",
            payload: [],
          });
        });
    }
  }, []);
}
