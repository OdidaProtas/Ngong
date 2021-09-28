const authReducer = (state: any, action: any) => {
  switch (action.type) {
    case "SIGN_IN":
      return {
        ...state,
        user: action.payload,
        isLoggedIn: true,
      };
    case "SIGN_OUT":
      return {
        ...state,
        user: null,
        isLoggedIn: false,
      };
    case "RESTORE_TOKEN":
      return {
        ...state,
        user: action.payload,
        isLoggedIn: true,
      };
  }
};

export default authReducer;
