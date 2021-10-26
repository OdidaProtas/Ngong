import { createContext } from "react";

export const initialState = {
  user: null,
  myStores: null,
};

const StateContext = createContext(initialState);
export default StateContext;
