import { createContext } from "react";

export const initialState = {
  user: null,
  stores: null,
  hasStore: false,
};

const StateContext = createContext(initialState);
export default StateContext;
