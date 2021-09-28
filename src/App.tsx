import { useEffect, useMemo, useReducer } from "react";
import { AppNavigation } from "./navigation";
import {
  AuthContext,
  authContextMemo,
  bootstrapAsync,
  initialState,
} from "./state/authstate";
import reducer from "./state/authstate/AuthReducer";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState) as any;
  const authContext: any = useMemo(() => authContextMemo(dispatch, state), []);
  
  useEffect(() => {
    const bootstrap = () => bootstrapAsync(dispatch);
    bootstrap();
  }, []);

  return (
    <AuthContext.Provider value={authContext}>
      <AppNavigation />
    </AuthContext.Provider>
  );
}

export default App;
