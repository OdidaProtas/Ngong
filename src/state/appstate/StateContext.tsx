import { createContext } from "react";

export const initialState = {
  user: null,
  businesses: [],
};

const StateContext = createContext(initialState);
export default StateContext;
