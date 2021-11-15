import React, { useContext, useEffect } from "react";
import { useParams } from "react-router";
import { axiosInstance } from "../../state";
import { StateContext } from "../../state/appstate";

export default function useMyTransfers() {
  const { transfers, stateDispatch }: any = useContext(StateContext);
  const { id }: any = useParams();
  useEffect(() => {
    if (transfers === null) {
      axiosInstance
        .get(`/transfers/${id}`)
        .then((r) => {
          stateDispatch({
            type: "ADD_TRANSFERS",
            payload: r.data,
          });
        })
        .catch((e) => {
          stateDispatch({
            type: "ADD_TRANSFER",
            payload: [],
          });
        });
    }
  }, []);
}
