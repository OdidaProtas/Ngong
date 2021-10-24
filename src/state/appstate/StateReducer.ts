const stateReducer = (state: any, action: any) => {
  switch (action.type) {
    case "BUSINESSES":
      return {
        ...state,
        businesses: [],
      };

    case "HAS_STORE":
      return {
        ...state,
        hasStore: true,
        stores: action.payload,
      };
     case "NO_STORE":
        return {
          ...state,
          stores: [],
        };
    default:
      return {
        ...state,
      };
  }
};

export default stateReducer;
