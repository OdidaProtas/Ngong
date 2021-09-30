const authContextMemo = (dispatch: any, state: any) => ({
  signIn: async (data: any) => {
    localStorage.setItem("userToken", JSON.stringify(`Bearer ${data}`));
    dispatch({ type: "SIGN_IN", payload: data });
  },
  signOut: async (data: any) => {
    localStorage.clear();
    dispatch({ type: "SIGN_OUT" });
  },
  isLoggedIn: state.isLoggedIn,
});

export default authContextMemo;
