import { createContext } from "react";

export const initialState = {
  user: null,
  isLoggedIn: true,
};

const AuthContext = createContext(initialState);
export default AuthContext;
