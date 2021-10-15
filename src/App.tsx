import { Suspense, useEffect, useMemo, useReducer } from "react";

import { AppNavigation } from "./navigation";
import {
  AuthContext,
  authContextMemo,
  bootstrapAsync,
  initialAuthState,
} from "./state/authstate";
import reducer from "./state/authstate/AuthReducer";

function App() {
  const [state, dispatch] = useReducer(reducer, initialAuthState) as any;
  const authContext: any = useMemo(() => authContextMemo(dispatch, state), []);

  useEffect(() => {
    const bootstrap = () => bootstrapAsync(dispatch);
    bootstrap();
  }, []);

  return (
    <AuthContext.Provider value={{ ...authContext, state }}>
      <Suspense fallback={<div>Loading...</div>}>
        <AppNavigation />
      </Suspense>
    </AuthContext.Provider>
  );
}

export default App;
