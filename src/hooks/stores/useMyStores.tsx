import { useContext, useEffect } from "react";
import { StateContext } from "../../state/appstate";
import useAxiosRequest from "../network/useAxiosRequest";

const useMyStores = () => {
  const { loading, processRequest, data } = useAxiosRequest();

  const { myStores, stateDispatch, loadingStores }: any =
    useContext(StateContext);

  useEffect(() => {
    if (myStores === null && !loadingStores) {
      stateDispatch({ type: "TOGGLE_STORE_LOADING" });
      processRequest({
        method: "get",
        endpoint: `/my-stores`,
      });
    }
  }, []);

  useEffect(() => {
    if (data) {
      stateDispatch({ type: "ADD_MY_STORES", payload: data });
    }
  }, [data]);
};

export default useMyStores;
