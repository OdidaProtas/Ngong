import { createContext } from "react";

export const initialState = {
  email: "",
  id: "",
};

export const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "ADD_EMAIL":
      return {
        ...state,
        email: action.payload,
      };
      break;

    case "ADD_ID":
      return {
        ...state,
        id: action.payload,
      };

    default:
      return {
        ...state,
      };
      break;
  }
};

const SignInContext = createContext(initialState);

export default SignInContext;
