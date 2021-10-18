import { Suspense, useEffect, useMemo, useReducer } from "react";

import { AppNavigation } from "./navigation";
import {
  initialState,
  stateContextMemo,
  stateReducer,
  bootstrapStateAsync,
  StateContext,
} from "./state/appstate";
import {
  AuthContext,
  authContextMemo,
  bootstrapAuthAsync,
  initialAuthState,
} from "./state/authstate";
import reducer from "./state/authstate/AuthReducer";

import { useAuthState } from "react-firebase-hooks/auth";

import { auth } from "./state/firebase/firebase";

function App() {
  const [appState, stateDispatch]: any = useReducer(stateReducer, initialState);
  const [authState, authDispatch]: any = useReducer(reducer, initialAuthState);
  const authContext: any = useMemo(
    () => authContextMemo(authDispatch, authState),
    []
  );

  const [user] = useAuthState(auth);

  const appContext: any = useMemo(
    () => stateContextMemo(stateDispatch, appState),
    []
  );

  useEffect(() => {
    const bootstrapAuth = () => bootstrapAuthAsync(authDispatch);
    const bootstrapState = () => bootstrapStateAsync(stateDispatch);
    bootstrapAuth();
    bootstrapState();
  }, []);

  const getAuthState = () => authState;
  const getAppState = () => appState;

  return (
    <AuthContext.Provider value={{ ...authContext, getAuthState, user }}>
      <StateContext.Provider value={{ ...appContext, getAppState }}>
        <Suspense fallback={<div>Loading...</div>}>
          <AppNavigation />
        </Suspense>
      </StateContext.Provider>
    </AuthContext.Provider>
  );
}

export default App;
