import { Suspense, useEffect, useMemo, useReducer, useState } from "react";

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
import Loader from "./components/SharedComponents/Loader/Loader";
import { usePageVisibility } from "./hooks/usePageVisibility";

function App() {
  const [appState, stateDispatch]: any = useReducer(stateReducer, initialState);
  const [authState, authDispatch]: any = useReducer(reducer, initialAuthState);
  const authContext: any = useMemo(
    () => authContextMemo(authDispatch, authState),
    []
  );

  const appContext: any = useMemo(
    () => stateContextMemo(stateDispatch, appState),
    []
  );

  const isVisible = usePageVisibility();

  useEffect(() => {
    if (!isVisible) localStorage.setItem("state", JSON.stringify(appState));
  }, [isVisible]);

  useEffect(() => {
    const cacheState = JSON.parse(localStorage.getItem("state"));
    console.log(cacheState)
  }, []);

  useEffect(() => {
    const bootstrapAuth = () => bootstrapAuthAsync(authDispatch);
    const bootstrapState = () => bootstrapStateAsync(stateDispatch);
    bootstrapAuth();
    bootstrapState();
  }, []);

  return (
    <AuthContext.Provider value={{ ...authContext, authState }}>
      <StateContext.Provider value={{ ...appState, stateDispatch }}>
        <Suspense fallback={<Loader />}>
          <AppNavigation />
      </Suspense>
      </StateContext.Provider>
    </AuthContext.Provider>
  );
}

export default App;
