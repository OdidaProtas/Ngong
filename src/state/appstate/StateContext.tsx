import { createContext } from "react";

export const initialState = {
  user: null,
  myStores: null,
  loadingStores: false,
  myProducts: null,
  productLoading: false,
  suppliers: null,
  supplierLoading: false,
  vendors: null,
  transfers: null,
  transfersLoading: false,
  collections: null,
  giftCards: null,
};

const StateContext = createContext(initialState);
export default StateContext;
