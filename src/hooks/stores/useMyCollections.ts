import React, { useContext, useEffect } from "react";
import { useParams } from "react-router";
import { axiosInstance } from "../../state";
import { StateContext } from "../../state/appstate";

export default function useMyCollections() {
  const { collections, stateDispatch }: any = useContext(StateContext);
  const { id }: any = useParams();
  useEffect(() => {
    if (collections === null) {
      axiosInstance
        .get(`/collections/${id}`)
        .then((r) => {
          stateDispatch({
            type: "ADD_COLLECTIONS",
            payload: r.data,
          });
        })
        .catch((e) => {
          stateDispatch({
            type: "ADD_COLLECTIONS",
            payload: [],
          });
        });
    }
  }, []);
}
