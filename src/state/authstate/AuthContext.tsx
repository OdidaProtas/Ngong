import { createContext } from "react";

export const initialAuthState = {
  user: null,
  isLoggedIn: false,
};

const AuthContext = createContext(initialAuthState);
export default AuthContext;
