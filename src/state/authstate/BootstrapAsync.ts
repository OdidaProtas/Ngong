import jwt_decode from "jwt-decode";

export default function bootstrapAsync(dispatch: any) {
  let userToken;

  try {
    userToken = localStorage.getItem("userToken");
    if (userToken) {
      const user = jwt_decode(JSON.parse(userToken));
      dispatch({ type: "RESTORE_TOKEN", payload: user });
    }
  } catch (e) {
    console.log("Token failed to restore");
  }
}
