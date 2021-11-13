import jwtDecode from "jwt-decode";

const authContextMemo = (dispatch: any, state: any) => ({
  signIn: async (data: any) => {
    localStorage.setItem("userToken", JSON.stringify(data));
    const user = jwtDecode(data);
    dispatch({ type: "SIGN_IN", payload: user });
  },
  signOut: async (data: any) => {
    localStorage.clear();
    dispatch({ type: "SIGN_OUT" });
  },
});

export default authContextMemo;
