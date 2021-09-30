import { createContext } from "react";

export const initialState = {
  user: null,
  isLoggedIn: false,
};

const AuthContext = createContext(initialState);
export default AuthContext;
