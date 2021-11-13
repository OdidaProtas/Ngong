import { createContext } from "react";

export const initialState = {
  user: null,
  myStores: null,
  loadingStores: false,
  myProducts: null,
  productLoading: false,
};

const StateContext = createContext(initialState);
export default StateContext;
