import { useContext, useEffect } from "react";
import { useParams } from "react-router";
import { axiosInstance } from "../../state";
import { StateContext } from "../../state/appstate";

export default function useMyProducts() {
  const { myProducts, stateDispatch, productLoading }: any = useContext(StateContext);
  const { id }: any = useParams();

  useEffect(() => {
    if (myProducts === null && !productLoading) {
      stateDispatch({ type: "LOADING_PRODUCTS" });
      axiosInstance
        .get(`/my-products/${id}`)
        .then((res) => {
          stateDispatch({ type: "ADD_MY_PRODUCTS", payload: res.data });
        })
        .catch((e) => {
          stateDispatch({ type: "ADD_MY_PRODUCTS", payload: [] });
        });
    }
  }, []);

  
  useEffect(() => {
    if (!productLoading) {
      stateDispatch({ type: "LOADING_PRODUCTS" });
      axiosInstance
        .get(`/my-products/${id}`)
        .then((res) => {
          stateDispatch({ type: "ADD_MY_PRODUCTS", payload: res.data });
        })
        .catch((e) => {
          stateDispatch({ type: "ADD_MY_PRODUCTS", payload: [] });
        });
    }
  }, [id]);
}
