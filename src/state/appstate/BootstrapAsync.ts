export default function bootstrapAsync(dispatch: any) {
  let userToken;

  try {
    userToken = localStorage.getItem("userToken");
  } catch (e) {
    console.log("Token failed to restore");
  }

  if (userToken) {
    dispatch({ type: "RESTORE_TOKEN", payload: userToken });
  }
}
