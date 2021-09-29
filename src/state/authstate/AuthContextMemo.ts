




const authContextMemo = (dispatch: any, state: any) => ({
  signIn: async (data: any) => {
    localStorage.setItem("userToken", JSON.stringify(data));
    dispatch({ type: "SIGN_IN", payload: data });
  },
  signOut: async (data: any) => {
    localStorage.clear();
    dispatch({ type: "SIGN_OUT" });
  },
  userToken: () => state.userToken,
  user: state.user,
});

export default authContextMemo;
