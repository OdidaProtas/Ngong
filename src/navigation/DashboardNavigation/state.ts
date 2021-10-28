import { createContext } from "react";

export const initialState = {
  store: null,
};

export const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "ADD_STORE":
      return {
        ...state,
        store: action.payload,
      };
      break;
    default:
      return {
        ...state,
      };
      break;
  }
};

const DashboardContext = createContext(initialState);

export default DashboardContext;
