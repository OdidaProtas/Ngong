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

import { useAuthState } from "react-firebase-hooks/auth";

import { auth, firestore } from "./state/firebase/firebase";

function App() {
  const [appState, stateDispatch]: any = useReducer(stateReducer, initialState);
  const [authState, authDispatch]: any = useReducer(reducer, initialAuthState);
  const [profile, setProfile]: any = useState(null);
  const authContext: any = useMemo(
    () => authContextMemo(authDispatch, authState),
    []
  );

  const [user, loading] = useAuthState(auth);

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

  useEffect(() => {
    updateAuth();
    updateStores();
  }, [user, appState.hasStore]);

  const getAuthState = () => authState;
  const getAppState = () => appState;

  const updateAuth = async () => {
    if (user) {
      const query = await firestore
        .collection("profiles")
        .where("uid", "==", user.uid)
        .get();
      if (query.docs.length > 0) {
        setProfile(query.docs[0].data());
      } else {
        setProfile({ hasProfile: false });
      }
    }
  };

  const addStore = () => {
    stateDispatch({ type: "HAS_STORE" });
  };

  const updateStores = async () => {
    if (user) {
      const query = await firestore
        .collection("stores")
        .where("uid", "==", user.uid)
        .get();
      if (query.docs.length > 0) {
      stateDispatch({ type: "HAS_STORE", payload: query.docs[0].data() });
      }else{
        stateDispatch({ type: "NO_STORE",});
      }
    }
  };

  return (
    <AuthContext.Provider
      value={{
        ...authContext,
        getAuthState,
        user,
        profile,
        profileLoading: loading,
      }}
    >
      <StateContext.Provider value={{ ...appContext, getAppState, addStore }}>
        <Suspense fallback={<div>Loading...</div>}>
          <AppNavigation />
        </Suspense>
      </StateContext.Provider>
    </AuthContext.Provider>
  );
}

export default App;
