import { Suspense, useEffect, useMemo, useReducer } from "react";
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
      <Suspense fallback={<div>Loading...</div>}>
        <AppNavigation />
      </Suspense>
    </AuthContext.Provider>
  );
}

export default App;
