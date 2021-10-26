const authReducer = (state: any, action: any) => {
  switch (action.type) {
    case "SIGN_IN":
      return {
        ...state,
        user: action.payload,
        isLoggedIn: true,
        loaded: true,
      };
    case "SIGN_OUT":
      return {
        ...state,
        user: null,
        isLoggedIn: false,
        loaded: false,
      };
    case "RESTORE_TOKEN":
      return {
        ...state,
        isLoggedIn: true,
        loaded: true,
        user: action.payload,
      };
  }
};

export default authReducer;
